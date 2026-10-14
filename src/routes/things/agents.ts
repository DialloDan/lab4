import { Router } from 'express';

import { list, show, edit, destroy } from 'controllers/agents/index';

const router = Router();

router.get('/agents', list);

router.get('/agents/:id([0-9]+)', show);

router.patch('/agents/:id([0-9]+)', edit);

router.delete('/agents/:id([0-9]+)', destroy);

export default router;
