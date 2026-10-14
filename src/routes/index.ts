import { Router } from 'express';

import page404 from './basic/404';
import pageRoot from './basic/root';

import agents from './things/agents';
import tasks from './things/tasks';

const router = Router();

// basic

router.use(pageRoot);
router.use(page404);

// things

router.use(agents);
router.use(tasks);

export default router;
