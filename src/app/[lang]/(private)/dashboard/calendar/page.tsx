"use client";

import { Calendar, dateFnsLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { format, parse, startOfWeek, getDay } from "date-fns";
import { ptBR } from "date-fns/locale/pt-BR";
import { useState } from "react";

const locales = {
  "pt-BR": ptBR,
};

const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales,
});

type CustomEvent = {
  id: string;
  title: string;
  start: Date;
  end: Date;
  user: {
    id: string;
    name: string;
    color: string;
  };
};

// Simula o usuário atual logado
const currentUser = {
  id: "user123",
  name: "Murilo",
  color: "#007BFF",
};

export default function CollaborativeCalendar() {
  const [events, setEvents] = useState<CustomEvent[]>([]);

  const handleSelectSlot = ({ start, end }: { start: Date; end: Date }) => {
    const title = prompt("Título do evento:");
    if (!title) return;

    const newEvent: CustomEvent = {
      id: crypto.randomUUID(),
      title,
      start,
      end,
      user: currentUser,
    };

    setEvents((prev) => [...prev, newEvent]);
  };

  // Editar ou excluir evento
  const handleSelectEvent = (event: unknown) => {
    const customEvent = event as CustomEvent;

    if (customEvent.user.id !== currentUser.id) {
      alert("Você só pode editar ou remover seus próprios eventos.");
      return;
    }

    const action = prompt(
      `Você deseja editar ou excluir o evento?\nDigite "editar" ou "excluir".`
    );

    if (action?.toLowerCase() === "excluir") {
      setEvents((prev) => prev.filter((e) => e.id !== customEvent.id));
    } else if (action?.toLowerCase() === "editar") {
      const newTitle = prompt("Novo título do evento:", customEvent.title);
      if (!newTitle) return;

      const newStartStr = prompt(
        "Nova data de início (AAAA-MM-DD HH:MM):",
        customEvent.start.toISOString().slice(0, 16).replace("T", " ")
      );
      const newEndStr = prompt(
        "Nova data de término (AAAA-MM-DD HH:MM):",
        customEvent.end.toISOString().slice(0, 16).replace("T", " ")
      );

      const newStart = new Date(newStartStr || "");
      const newEnd = new Date(newEndStr || "");

      if (isNaN(newStart.getTime()) || isNaN(newEnd.getTime())) {
        alert("Datas inválidas.");
        return;
      }

      setEvents((prev) =>
        prev.map((e) =>
          e.id === customEvent.id
            ? { ...e, title: newTitle, start: newStart, end: newEnd }
            : e
        )
      );
    }
  };

  const eventStyleGetter = (
    event: unknown,
    start: Date,
    end: Date,
    isSelected: boolean
  ) => {
    const customEvent = event as CustomEvent;
    return {
      style: {
        backgroundColor: customEvent.user.color,
        borderRadius: "6px",
        opacity: 0.9,
        color: "white",
        paddingLeft: "6px",
        cursor: "pointer",
        start,
        end,
        isSelected,
      },
    };
  };

  const CustomEventComponent = ({ event }: { event: unknown }) => {
    const customEvent = event as CustomEvent;
    return (
      <div>
        <strong>{customEvent.title}</strong>
        <div style={{ fontSize: "0.8rem" }}>{customEvent.user.name}</div>
      </div>
    );
  };
  
  return (
    <div className="p-4">
      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        selectable
        onSelectSlot={handleSelectSlot}
        onSelectEvent={handleSelectEvent}
        style={{ height: 600 }}
        eventPropGetter={eventStyleGetter}
        components={{
            event: CustomEventComponent          
        }}        
      />
    </div>
  );
}
