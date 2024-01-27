"use client";

import { useState } from "react";

const CalendarsGet: React.FC = () => {
  const [calendars, setCalendars] = useState<any>([]);

  const getCalendars = async () => {
    const response = await fetch("/api/calendars");
    const data = await response.json();
    setCalendars(data);
  };

  return (
    <div className="flex flex-col gap-12">
      <button type="button" onClick={getCalendars}>
        Get calendars
      </button>
      <code>
        <pre>{JSON.stringify(calendars, null, 2)}</pre>
      </code>
    </div>
  );
};

export default CalendarsGet;
