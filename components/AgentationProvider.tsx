'use client';

import { Agentation } from 'agentation';
import { useEffect, useState } from 'react';

export default function AgentationProvider() {
  const [isDev, setIsDev] = useState(false);

  useEffect(() => {
    setIsDev(process.env.NODE_ENV === 'development');
  }, []);

  if (!isDev) return null;

  return <Agentation endpoint="http://localhost:4747" />;
}
