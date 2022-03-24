const express = require("express");
const { protect } = require("../middleware/authMiddleware");
const { accessRoom, fetchRoom, createGroupRoom, renameGroup, removeFromGroup, addToGroup } = require("./../controllers/roomControllers");



const router = express.Router();

router.route("/").post(protect, accessRoom);
router.route("/").get(protect, fetchRoom);
router.route("/group").post(protect, createGroupRoom);
router.route("/rename").put(protect, renameGroup);
router.route("/groupremove").put(protect, removeFromGroup);
router.route("/groupadd").put(protect, addToGroup);

module.exports = router;