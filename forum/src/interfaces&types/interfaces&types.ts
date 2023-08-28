export type IConsultType = 'консультация' | 'прием';
export type IEventType = 'вебинар' | 'встреча';
export type INotebook = 'заметки' | 'консультации' | 'видео' | 'мероприятия';

export interface IUser {
  id: number;
  avatar?: string;
  name?: string;
  email: string;
  telegram: boolean;
  warn: boolean;
  selected: boolean;
  sex: 'муж' | 'жен';
  age: number;
  lat: number;
  lng: number;
  zoom: number;
  notes: INote[];
  consultations: IConsult[];
  videos: IVideo[];
  events: IEvent[];
}

export interface INote {
  date: Date;
  note: string;
}

export interface IConsult {
  consult: IConsultType;
  date: Date;
  durationMinutes: number;
  confirm: boolean;
}

export interface IVideo {
  image: string;
  title: string;
  name: string;
  date?: Date;
  durationDays?: number;
}

export interface IEvent {
  image: string;
  title: string;
  format: IEventType;
  date: Date;
}
