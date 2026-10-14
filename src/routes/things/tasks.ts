import { Router } from 'express';

import { list, show, edit, destroy } from 'controllers/tasks/index';

const router = Router();

router.get('/tasks', list);

router.get('/tasks/:id([0-9]+)', show);

router.patch('/tasks/:id([0-9]+)', edit);

router.delete('/tasks/:id([0-9]+)', destroy);

export default router;
