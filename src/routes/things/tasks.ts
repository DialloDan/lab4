import { Router } from 'express';

import { taskBodyCheck } from "middleware/validation/task";

import { create, list, show, edit, destroy } from "controllers/tasks";

const router = Router();

router.post('/tasks/create', taskBodyCheck, create);

router.get('/tasks', list);

router.get('/tasks/:id([0-9]+)', show);

router.patch('/tasks/:id([0-9]+)', taskBodyCheck, edit);

router.delete('/tasks/:id([0-9]+)', destroy);

export default router;
