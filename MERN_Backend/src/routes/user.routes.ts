import { Router } from "express";
import { UserController } from "../controllers/user.controller";
import { authenticateJWT } from "../middlewares/auth.middleware";
import passport from 'passport';

const router = Router();
const ctrl = new UserController();

router.get("/", authenticateJWT, ctrl.getAll.bind(ctrl));
router.get("/:id", authenticateJWT, ctrl.getById.bind(ctrl));
router.post("/", ctrl.create.bind(ctrl));
router.put("/:id", authenticateJWT, ctrl.update.bind(ctrl));
router.delete("/:id", authenticateJWT, ctrl.delete.bind(ctrl));
router.post("/login", ctrl.login.bind(ctrl));

router.get("/auth/google", passport.authenticate("google", { scope: ["profile", "email"] }));
router.get("/auth/google/callback",
    passport.authenticate("google", { failureRedirect: "/login" }),
    (req, res) => {
        res.json(req.user);
    }
);

export default router;
