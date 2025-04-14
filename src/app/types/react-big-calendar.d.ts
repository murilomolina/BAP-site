declare module "react-big-calendar" {
    import { ComponentType } from "react";
  
    export type DateLocalizer = {
      formats: Record<string, any>;
      firstOfWeek: (culture: string) => number;
      format: (value: Date, format: string, culture: string) => string;
      parse: (value: string, format: string, culture: string) => Date;
    };
  
    export type Event = {
      title: string;
      allDay?: boolean;
      start: Date;
      end: Date;
      [key: string]: any;
    };
  
    export interface CalendarProps {
      localizer: DateLocalizer;
      events: Event[];
      startAccessor: string | ((event: Event) => Date);
      endAccessor: string | ((event: Event) => Date);
      titleAccessor?: string | ((event: Event) => string);
      allDayAccessor?: string | ((event: Event) => boolean);
      views?: string[] | { [view: string]: boolean };
      defaultView?: string;
      style?: React.CSSProperties;
      eventPropGetter?: (
        event: Event,
        start: Date,
        end: Date,
        isSelected: boolean
      ) => {
        style?: React.CSSProperties;
        className?: string;
      };
      components?: {
        event?: ComponentType<{ event: Event }>;
      };
      [key: string]: any;
    }
  
    export const Calendar: ComponentType<CalendarProps>;
  
    export function dateFnsLocalizer(config: {
      format: any;
      parse: any;
      startOfWeek: any;
      getDay: any;
      locales: Record<string, Locale>;
    }): DateLocalizer;
  }
  