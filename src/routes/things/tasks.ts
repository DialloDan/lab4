import { Router } from 'express';

import { taskBodyCheck } from "middleware/validation/task";

import { create, list, show, edit, destroy } from "controllers/tasks";

import { checkJwt } from 'middleware/checkJwt';

const router = Router();

router.post('/tasks/create', [checkJwt, taskBodyCheck], create);

router.get('/tasks', checkJwt, list);

router.get('/tasks/:id([0-9]+)', checkJwt, show);

router.patch('/tasks/:id([0-9]+)', [checkJwt, taskBodyCheck], edit);

router.delete('/tasks/:id([0-9]+)', checkJwt, destroy);

export default router;
