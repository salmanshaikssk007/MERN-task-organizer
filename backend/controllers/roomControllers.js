const asyncHandler = require("express-async-handler");
const Room = require("../models/roomModel");
const User = require("../models/userModel");

//@description     Create or fetch single Task
//@route           POST /api/room/
//@access          Protected
const accessRoom = asyncHandler(async (req, res) => {
    
    // console.log(req);
  const { _id : senderId } = req.user ;

  var isRoom = await Room.find({
    isGroupRoom : false,
    $and: [
      { users: { $elemMatch: { $eq: senderId } } },
    ],
  })
    .populate("users", "-password")
    
  isRoom = await User.populate(isRoom, {
    path: "latestMessage.sender",
    select: "name pic email",
  });

  if (isRoom.length > 0) {
    res.send(isRoom[0]);
  } else {
    var roomData = {
      roomName: "sender",
      isGroupRoom: false,
      users: [senderId],
    };

    try {
      const createdRoom = await Room.create(roomData);
      const FullRoom = await Room.findOne({ _id: createdRoom._id }).populate(
        "users",
        "-password"
      );
      res.status(200).json(FullRoom);
    } catch (error) {
      res.status(400);
      throw new Error(error.message);
    }
  }
});

//@description     Fetch all rooms for a user
//@route           GET /api/room/
//@access          Protected
const fetchRoom = asyncHandler(async (req, res) => {
  try {
    Room.find({ users: { $elemMatch: { $eq: req.user._id } } })
      .populate("users", "-password")
      .populate("groupAdmin", "-password")
      .sort({ updatedAt: -1 })
      .then(async (results) => {
        results = await User.populate(results, {
          path: "latestMessage.sender",
          select: "name pic email",
        });
        res.status(200).send(results);
      });
  } catch (error) {
    res.status(400);
    throw new Error(error.message);
  }
});

//@description     Create New Group Task
//@route           POST /api/room/group
//@access          Protected
const createGroupRoom = asyncHandler(async (req, res) => {
  if (!req.body.users || !req.body.name) {
    return res.status(400).send({ message: "Please Fill all the feilds" });
  }

  var users = JSON.parse(req.body.users);

  if (users.length < 1) {
    return res
      .status(400)
      .send("More than 1 users are required to form a group Task");
  }

  users.push(req.user);

  try {
    const groupRoom = await Room.create({
      roomName: req.body.name,
      users: users,
      isGroupRoom: true,
      groupAdmin: req.user,
    });

    const fullGroupRoom = await Room.findOne({ _id: groupRoom._id })
      .populate("users", "-password")
      .populate("groupAdmin", "-password");

    res.status(200).json(fullGroupRoom);
  } catch (error) {
    res.status(400);
    throw new Error(error.message);
  }
});

// @desc    Rename Group
// @route   PUT /api/room/rename
// @access  Protected
const renameGroup = asyncHandler(async (req, res) => {
  const { roomId, roomName } = req.body;

  const updatedRoom = await Room.findByIdAndUpdate(
    roomId,
    {
      roomName: roomName,
    },
    {
      new: true,
    }
  )
    .populate("users", "-password")
    .populate("groupAdmin", "-password");

  if (!updatedRoom) {
    res.status(404);
    throw new Error("Room Not Found");
  } else {
    res.json(updatedRoom);
  }
});

// @desc    Remove user from Group
// @route   PUT /api/room/groupremove
// @access  Protected
const removeFromGroup = asyncHandler(async (req, res) => {
  const { roomId, userId } = req.body;

  // check if the requester is admin

  const removed = await Room.findByIdAndUpdate(
    roomId,
    {
      $pull: { users: userId },
    },
    {
      new: true,
    }
  )
    .populate("users", "-password")
    .populate("groupAdmin", "-password");

  if (!removed) {
    res.status(404);
    throw new Error("Room Not Found");
  } else {
    res.json(removed);
  }
});

// @desc    Add user to Group / Leave
// @route   PUT /api/room/groupadd
// @access  Protected

const addToGroup = asyncHandler(async (req, res) => {

  const { roomId, userId } = req.body;

  // check if the requester is admin

  const added = await Room.findByIdAndUpdate(
    roomId,
    {
      $push: { users: userId },
    },
    {
      new: true,
    }
  )
    .populate("users", "-password")
    .populate("groupAdmin", "-password");

  if (!added) {
    res.status(404);
    throw new Error("Room Not Found");
  } else {
    res.json(added);
  }
});

module.exports = {
  accessRoom,
  fetchRoom,
  createGroupRoom,
  renameGroup,
  addToGroup,
  removeFromGroup,
};