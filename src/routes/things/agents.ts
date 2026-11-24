import { Router } from 'express';

import { agentBodyCheck } from "middleware/validation/agent";

import { create, list, show, edit, destroy } from "controllers/agents";

import { checkJwt } from 'middleware/checkJwt';

const router = Router();

router.post('/agents/create', [checkJwt, agentBodyCheck], create);

router.get('/agents', checkJwt, list);

router.get('/agents/:id([0-9]+)', checkJwt, show);

router.patch('/agents/:id([0-9]+)', [checkJwt, agentBodyCheck], edit);

router.delete('/agents/:id([0-9]+)', checkJwt, destroy);

export default router;
