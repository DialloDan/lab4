import { Router } from 'express';

import { agentBodyCheck } from "middleware/validation/agent";

import { create, list, show, edit, destroy } from "controllers/agents";

const router = Router();

router.post('/agents/create', agentBodyCheck, create);

router.get('/agents', list);

router.get('/agents/:id([0-9]+)', show);

router.patch('/agents/:id([0-9]+)', agentBodyCheck, edit);

router.delete('/agents/:id([0-9]+)', destroy);

export default router;
