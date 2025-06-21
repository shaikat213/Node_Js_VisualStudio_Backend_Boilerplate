"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const user_controller_1 = require("../controllers/user.controller");
const auth_middleware_1 = require("../middlewares/auth.middleware");
const passport_1 = __importDefault(require("passport"));
const router = (0, express_1.Router)();
const ctrl = new user_controller_1.UserController();
router.get("/", auth_middleware_1.authenticateJWT, ctrl.getAll.bind(ctrl));
router.get("/:id", auth_middleware_1.authenticateJWT, ctrl.getById.bind(ctrl));
router.post("/", ctrl.create.bind(ctrl));
router.put("/:id", auth_middleware_1.authenticateJWT, ctrl.update.bind(ctrl));
router.delete("/:id", auth_middleware_1.authenticateJWT, ctrl.delete.bind(ctrl));
router.post("/login", ctrl.login.bind(ctrl));
router.get("/auth/google", passport_1.default.authenticate("google", { scope: ["profile", "email"] }));
router.get("/auth/google/callback", passport_1.default.authenticate("google", { failureRedirect: "/login" }), (req, res) => {
    res.json(req.user);
});
exports.default = router;
