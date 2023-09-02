import { makeAutoObservable } from 'mobx';
import Kravcova from '../assets/users/Kravcova.png';
import Rozhkov from '../assets/users/Rozhkov.png';
import Dibrova from '../assets/users/Dibrova.png';
import Ivanov from '../assets/users/Ivanov.png';
import Force from '../assets/users/Force.png';
import Ahmedov from '../assets/users/Ahmedov.png';
import Blazhevich from '../assets/users/Blazhevich.png';
import Valieva from '../assets/users/Valieva.png';
import Voloshina from '../assets/users/Voloshina.png';
import video1 from '../assets/videos/1.png';
import video2 from '../assets/videos/2.png';
import video3 from '../assets/videos/3.png';
import event1 from '../assets/events/1.png';
import { IUser } from '../interfaces&types/interfaces&types';

class UsersState {
  users: IUser[] = [
    {
      id: 1,
      avatar: Kravcova,
      name: 'Кравцова Александра',
      email: 'kravcova@mail.ru',
      sex: 'жен',
      age: 29,
      lat: -34.397,
      lng: 150.644,
      zoom: 8,
      telegram: true,
      warn: false,
      selected: false,
      notes: [
        {
          date: new Date(2019, 11, 17),
          note: 'КравцоваФизические упражнения способствуют активизации мышечных сокращений, кровотока в тканях, снимают отечность, повышают энергетические возможности мышц. Улучшенное питание мышечной ткани ускоряет замещение различных посттравматических дефектов в самих мышцах, костной ткани, связках и сухожилиях.',
        },
        {
          date: new Date(2018, 11, 17),
          note: 'КравцоваУлучшенное питание мышечной ткани ускоряет замещение различных посттравматических дефектов в самих мышцах, костной ткани, связках и сухожилиях.',
        },
      ],
      consultations: [
        {
          consult: 'консультация',
          date: new Date('2018-08-11T22:30:00'),
          durationMinutes: 15,
          confirm: true,
        },
        {
          consult: 'прием',
          date: new Date('2019-01-15T21:50:00'),
          durationMinutes: 45,
          confirm: false,
        },
        {
          consult: 'консультация',
          date: new Date('2019-01-15T23:25:00'),
          durationMinutes: 10,
          confirm: true,
        },
      ],
      videos: [
        {
          image: video1,
          title: 'КравцоваКрабик, ходьба в бок в приседе с двумя резинками Крабик',
          name: 'Астахова Е.В.',
          date: new Date(2009, 12, 15),
          durationDays: 30,
        },
        {
          image: video2,
          title: 'КравцоваРазминка для локтевого сустава',
          name: 'Астахова Е.В.',
          date: new Date(2014, 12, 16),
          durationDays: 1,
        },
        {
          image: video3,
          title: 'КравцоваРазминка для локтевого суставаРазминка для локтевого сустава',
          name: 'Астахова Е.В.',
          date: new Date(2019, 12, 17),
          durationDays: 2,
        },
      ],
      events: [
        {
          image: event1,
          title: 'КравцоваТяга резинки в шаге со сгибанием локтя под 90 градусов',
          format: 'вебинар',
          date: new Date('2019-01-15T12:25:00'),
        },
        {
          image: event1,
          title: 'КравцоваТяга резинки в шаге со сгибанием локтя под 90 градусов',
          format: 'вебинар',
          date: new Date('2019-01-15T12:25:00'),
        },
        {
          image: event1,
          title: 'КравцоваТяга резинки в шаге со сгибанием локтя под 90 градусов',
          format: 'вебинар',
          date: new Date('2019-01-15T12:25:00'),
        },
        {
          image: event1,
          title: 'КравцоваТяга резинки в шаге со сгибанием локтя под 90 градусов',
          format: 'вебинар',
          date: new Date('2019-01-15T12:25:00'),
        },
      ],
    },
    {
      id: 2,
      avatar: Rozhkov,
      name: 'Рожков Денис',
      email: 'rozhkov@mail.bk',
      sex: 'муж',
      age: 30,
      lat: -84.397,
      lng: 170.644,
      zoom: 7,
      telegram: false,
      warn: false,
      selected: false,
      notes: [
        {
          date: new Date(2019, 11, 17),
          note: 'Физические упражнения способствуют активизации мышечных сокращений, кровотока в тканях, снимают отечность, повышают энергетические возможности мышц. Улучшенное питание мышечной ткани ускоряет замещение различных посттравматических дефектов в самих мышцах, костной ткани, связках и сухожилиях.',
        },
        {
          date: new Date(2018, 11, 17),
          note: 'Улучшенное питание мышечной ткани ускоряет замещение различных посттравматических дефектов в самих мышцах, костной ткани, связках и сухожилиях.',
        },
      ],
      consultations: [
        {
          consult: 'консультация',
          date: new Date('2019-01-15T12:30:00'),
          durationMinutes: 30,
          confirm: true,
        },
        {
          consult: 'консультация',
          date: new Date('2019-01-15T12:25:00'),
          durationMinutes: 40,
          confirm: true,
        },
        {
          consult: 'прием',
          date: new Date('2019-01-15T12:20:00'),
          durationMinutes: 45,
          confirm: false,
        },
      ],
      videos: [
        {
          image: video1,
          title: 'Крабик, ходьба в бок в приседе с двумя резинками Крабик',
          name: 'Астахова Е.В.',
        },
        {
          image: video2,
          title: 'Разминка для локтевого сустава',
          name: 'Астахова Е.В.',
          date: new Date(2019, 1, 15),
          durationDays: 7,
        },
        {
          image: video3,
          title: 'Разминка для локтевого суставаРазминка для локтевого сустава',
          name: 'Астахова Е.В.',
          date: new Date(2019, 1, 15),
          durationDays: 7,
        },
      ],
      events: [
        {
          image: event1,
          title: 'Тяга резинки в шаге со сгибанием локтя под 90 градусов',
          format: 'вебинар',
          date: new Date('2019-01-15T12:25:00'),
        },
        {
          image: event1,
          title: 'Тяга резинки в шаге со сгибанием локтя под 90 градусов',
          format: 'вебинар',
          date: new Date('2019-01-15T12:25:00'),
        },
        {
          image: event1,
          title: 'Тяга резинки в шаге со сгибанием локтя под 90 градусов',
          format: 'вебинар',
          date: new Date('2019-01-15T12:25:00'),
        },
        {
          image: event1,
          title: 'Тяга резинки в шаге со сгибанием локтя под 90 градусов',
          format: 'вебинар',
          date: new Date('2019-01-15T12:25:00'),
        },
      ],
    },
    {
      id: 3,
      avatar: Kravcova,
      name: 'Кравцова Александра',
      email: 'kravcova@mail.ru',
      sex: 'жен',
      age: 29,
      lat: -4.397,
      lng: 15.644,
      zoom: 9,
      telegram: false,
      warn: true,
      selected: false,
      notes: [
        {
          date: new Date(2019, 11, 17),
          note: 'Физические упражнения способствуют активизации мышечных сокращений, кровотока в тканях, снимают отечность, повышают энергетические возможности мышц. Улучшенное питание мышечной ткани ускоряет замещение различных посттравматических дефектов в самих мышцах, костной ткани, связках и сухожилиях.',
        },
        {
          date: new Date(2018, 11, 17),
          note: 'Улучшенное питание мышечной ткани ускоряет замещение различных посттравматических дефектов в самих мышцах, костной ткани, связках и сухожилиях.',
        },
      ],
      consultations: [
        {
          consult: 'консультация',
          date: new Date('2018-08-11T22:30:00'),
          durationMinutes: 15,
          confirm: false,
        },
        {
          consult: 'консультация',
          date: new Date('2019-01-15T23:25:00'),
          durationMinutes: 10,
          confirm: true,
        },
        {
          consult: 'прием',
          date: new Date('2019-01-15T21:50:00'),
          durationMinutes: 45,
          confirm: false,
        },
      ],
      videos: [
        {
          image: video1,
          title: 'Крабик, ходьба в бок в приседе с двумя резинками Крабик',
          name: 'Астахова Е.В.',
        },
        {
          image: video2,
          title: 'Разминка для локтевого сустава',
          name: 'Астахова Е.В.',
        },
        {
          image: video3,
          title: 'Разминка для локтевого суставаРазминка для локтевого сустава',
          name: 'Астахова Е.В.',
          date: new Date(2023, 2, 2),
          durationDays: 6,
        },
        {
          image: video3,
          title: 'Разминка для локтевого суставаРазминка для локтевого сустава',
          name: 'Астахова Е.В.',
          date: new Date(2019, 3, 2),
          durationDays: 5,
        },
        {
          image: video3,
          title: 'Разминка для локтевого суставаРазминка для локтевого сустава',
          name: 'Астахова Е.В.',
        },
        {
          image: video3,
          title: 'Разминка для локтевого суставаРазминка для локтевого сустава',
          name: 'Астахова Е.В.',
        },
      ],
      events: [
        {
          image: event1,
          title: 'Тяга резинки в шаге со сгибанием локтя под 90 градусов',
          format: 'вебинар',
          date: new Date('2019-01-15T12:25:00'),
        },
        {
          image: event1,
          title: 'Тяга резинки в шаге со сгибанием локтя под 90 градусов',
          format: 'вебинар',
          date: new Date('2019-01-15T12:25:00'),
        },
        {
          image: event1,
          title: 'Тяга резинки в шаге со сгибанием локтя под 90 градусов',
          format: 'вебинар',
          date: new Date('2019-01-15T12:25:00'),
        },
        {
          image: event1,
          title: 'Тяга резинки в шаге со сгибанием локтя под 90 градусов',
          format: 'вебинар',
          date: new Date('2019-01-15T12:25:00'),
        },
      ],
    },
    {
      id: 4,
      avatar: Dibrova,
      name: 'Диброва Алевтина',
      email: 'dibrova@yandex.ru',
      sex: 'жен',
      age: 31,
      lat: -15.397,
      lng: 11.644,
      zoom: 8.9,
      telegram: false,
      warn: false,
      selected: false,
      notes: [
        {
          date: new Date(2019, 11, 17),
          note: 'ДиброваКравцоваФизические упражнения способствуют активизации мышечных сокращений, кровотока в тканях, снимают отечность, повышают энергетические возможности мышц. Улучшенное питание мышечной ткани ускоряет замещение различных посттравматических дефектов в самих мышцах, костной ткани, связках и сухожилиях.',
        },
        {
          date: new Date(2018, 11, 17),
          note: 'ДиброваКравцоваУлучшенное питание мышечной ткани ускоряет замещение различных посттравматических дефектов в самих мышцах, костной ткани, связках и сухожилиях.',
        },
      ],
      consultations: [
        {
          consult: 'консультация',
          date: new Date('2023-08-15T01:30:00'),
          durationMinutes: 25,
          confirm: false,
        },
        {
          consult: 'прием',
          date: new Date('2022-02-27T12:00:00'),
          durationMinutes: 60,
          confirm: false,
        },
        {
          consult: 'прием',
          date: new Date('2001-12-31T23:40:00'),
          durationMinutes: 15,
          confirm: true,
        },
      ],
      videos: [
        {
          image: video1,
          title: 'ДиброваКрабик, ходьба в бок в приседе с двумя резинками Крабик',
          name: 'Астахова Е.В.',
          date: new Date(2000, 1, 1),
          durationDays: 1,
        },
        {
          image: video2,
          title: 'ДиброваРазминка для локтевого сустава',
          name: 'Астахова Е.В.',
          date: new Date(2022, 11, 11),
          durationDays: 44,
        },
      ],
      events: [
        {
          image: event1,
          title: 'ДиброваТяга резинки в шаге со сгибанием локтя под 90 градусов',
          format: 'вебинар',
          date: new Date('2019-01-15T12:25:00'),
        },
        {
          image: event1,
          title: 'ДиброваТяга резинки в шаге со сгибанием локтя под 90 градусов',
          format: 'вебинар',
          date: new Date('2019-01-15T12:25:00'),
        },
        {
          image: event1,
          title: 'ДиброваТяга резинки в шаге со сгибанием локтя под 90 градусов',
          format: 'вебинар',
          date: new Date('2019-01-15T12:25:00'),
        },
        {
          image: event1,
          title: 'ДиброваТяга резинки в шаге со сгибанием локтя под 90 градусов',
          format: 'вебинар',
          date: new Date('2019-01-15T12:25:00'),
        },
      ],
    },
    {
      id: 5,
      avatar: Ivanov,
      name: 'Иванов Дмитрий',
      email: 'ivanov@yandex.kz',
      sex: 'муж',
      age: 33,
      lat: -166.397,
      lng: 122.644,
      zoom: 8.7,
      telegram: false,
      warn: false,
      selected: false,
      notes: [
        {
          date: new Date(2019, 11, 17),
          note: 'ИвановФизические упражнения способствуют активизации мышечных сокращений, кровотока в тканях, снимают отечность, повышают энергетические возможности мышц. Улучшенное питание мышечной ткани ускоряет замещение различных посттравматических дефектов в самих мышцах, костной ткани, связках и сухожилиях.',
        },
        {
          date: new Date(2018, 11, 17),
          note: 'ИвановУлучшенное питание мышечной ткани ускоряет замещение различных посттравматических дефектов в самих мышцах, костной ткани, связках и сухожилиях.',
        },
      ],
      consultations: [
        {
          consult: 'прием',
          date: new Date('2013-07-23T03:30:00'),
          durationMinutes: 45,
          confirm: false,
        },
        {
          consult: 'консультация',
          date: new Date('2014-08-24T03:45:00'),
          durationMinutes: 5,
          confirm: false,
        },
        {
          consult: 'прием',
          date: new Date('2015-09-25T05:55:00'),
          durationMinutes: 55,
          confirm: false,
        },
      ],
      videos: [
        {
          image: video1,
          title: 'ИвановКрабик, ходьба в бок в приседе с двумя резинками Крабик',
          name: 'Астахова Е.В.',
        },
        {
          image: video2,
          title: 'ИвановРазминка для локтевого сустава',
          name: 'Астахова Е.В.',
          date: new Date(2017, 12, 3),
          durationDays: 8,
        },
        {
          image: video3,
          title: 'ИвановРазминка для локтевого суставаРазминка для локтевого сустава',
          name: 'Астахова Е.В.',
          date: new Date(2018, 2, 2),
          durationDays: 9,
        },
        {
          image: video1,
          title: 'ИвановКрабик, ходьба в бок в приседе с двумя резинками Крабик',
          name: 'Астахова Е.В.',
        },
        {
          image: video2,
          title: 'ИвановРазминка для локтевого сустава',
          name: 'Астахова Е.В.',
          date: new Date(2011, 7, 17),
          durationDays: 4,
        },
      ],
      events: [
        {
          image: event1,
          title: 'ИвановТяга резинки в шаге со сгибанием локтя под 90 градусов',
          format: 'вебинар',
          date: new Date('2019-01-15T12:25:00'),
        },
        {
          image: event1,
          title: 'ИвановТяга резинки в шаге со сгибанием локтя под 90 градусов',
          format: 'вебинар',
          date: new Date('2019-01-15T12:25:00'),
        },
        {
          image: event1,
          title: 'ИвановТяга резинки в шаге со сгибанием локтя под 90 градусов',
          format: 'вебинар',
          date: new Date('2019-01-15T12:25:00'),
        },
        {
          image: event1,
          title: 'ИвановТяга резинки в шаге со сгибанием локтя под 90 градусов',
          format: 'вебинар',
          date: new Date('2019-01-15T12:25:00'),
        },
      ],
    },
    {
      id: 6,
      avatar: undefined,
      name: undefined,
      email: 'nosikov@list.ru',
      sex: 'муж',
      age: 35,
      lat: -89.397,
      lng: -89.644,
      zoom: 8.6,
      telegram: false,
      warn: false,
      selected: false,
      notes: [
        {
          date: new Date(2019, 11, 17),
          note: 'nosikovФизические упражнения способствуют активизации мышечных сокращений, кровотока в тканях, снимают отечность, повышают энергетические возможности мышц. Улучшенное питание мышечной ткани ускоряет замещение различных посттравматических дефектов в самих мышцах, костной ткани, связках и сухожилиях.',
        },
        {
          date: new Date(2018, 11, 17),
          note: 'nosikovУлучшенное питание мышечной ткани ускоряет замещение различных посттравматических дефектов в самих мышцах, костной ткани, связках и сухожилиях.',
        },
      ],
      consultations: [
        {
          consult: 'консультация',
          date: new Date('2019-01-15T12:30:00'),
          durationMinutes: 30,
          confirm: true,
        },
        {
          consult: 'консультация',
          date: new Date('2019-01-15T12:25:00'),
          durationMinutes: 40,
          confirm: true,
        },
        {
          consult: 'консультация',
          date: new Date('2019-01-15T12:20:00'),
          durationMinutes: 45,
          confirm: true,
        },
      ],
      videos: [
        {
          image: video1,
          title: 'nosikovКрабик, ходьба в бок в приседе с двумя резинками Крабик',
          name: 'Астахова Е.В.',
        },
        {
          image: video2,
          title: 'nosikovРазминка для локтевого сустава',
          name: 'Астахова Е.В.',
          date: new Date(2015, 12, 28),
          durationDays: 3,
        },
        {
          image: video3,
          title: 'nosikovРазминка для локтевого суставаРазминка для локтевого сустава',
          name: 'Астахова Е.В.',
          date: new Date(2010, 2, 28),
          durationDays: 5,
        },
        {
          image: video3,
          title: 'nosikovРазминка для локтевого суставаРазминка для локтевого сустава',
          name: 'Астахова Е.В.',
          date: new Date(2010, 2, 28),
          durationDays: 5,
        },
        {
          image: video3,
          title: 'nosikovРазминка для локтевого суставаРазминка для локтевого сустава',
          name: 'Астахова Е.В.',
          date: new Date(2010, 2, 28),
          durationDays: 5,
        },
        {
          image: video3,
          title: 'nosikovРазминка для локтевого суставаРазминка для локтевого сустава',
          name: 'Астахова Е.В.',
          date: new Date(2010, 2, 28),
          durationDays: 5,
        },
        {
          image: video3,
          title: 'nosikovРазминка для локтевого суставаРазминка для локтевого сустава',
          name: 'Астахова Е.В.',
          date: new Date(2010, 2, 28),
          durationDays: 5,
        },
        {
          image: video3,
          title: 'nosikovРазминка для локтевого суставаРазминка для локтевого сустава',
          name: 'Астахова Е.В.',
          date: new Date(2010, 2, 28),
          durationDays: 5,
        },
        {
          image: video3,
          title: 'nosikovРазминка для локтевого суставаРазминка для локтевого сустава',
          name: 'Астахова Е.В.',
          date: new Date(2010, 2, 28),
          durationDays: 5,
        },
        {
          image: video3,
          title: 'nosikovРазминка для локтевого суставаРазминка для локтевого сустава',
          name: 'Астахова Е.В.',
          date: new Date(2010, 2, 28),
          durationDays: 5,
        },
        {
          image: video3,
          title: 'nosikovРазминка для локтевого суставаРазминка для локтевого сустава',
          name: 'Астахова Е.В.',
          date: new Date(2010, 2, 28),
          durationDays: 5,
        },
        {
          image: video3,
          title: 'nosikovРазминка для локтевого суставаРазминка для локтевого сустава',
          name: 'Астахова Е.В.',
          date: new Date(2010, 2, 28),
          durationDays: 5,
        },
        {
          image: video3,
          title: 'nosikovРазминка для локтевого суставаРазминка для локтевого сустава',
          name: 'Астахова Е.В.',
          date: new Date(2010, 2, 28),
          durationDays: 5,
        },
        {
          image: video3,
          title: 'nosikovРазминка для локтевого суставаРазминка для локтевого сустава',
          name: 'Астахова Е.В.',
          date: new Date(2010, 2, 28),
          durationDays: 5,
        },
        {
          image: video3,
          title: 'nosikovРазминка для локтевого суставаРазминка для локтевого сустава',
          name: 'Астахова Е.В.',
          date: new Date(2010, 2, 28),
          durationDays: 5,
        },
        {
          image: video3,
          title: 'nosikovРазминка для локтевого суставаРазминка для локтевого сустава',
          name: 'Астахова Е.В.',
          date: new Date(2010, 2, 28),
          durationDays: 5,
        },
        {
          image: video3,
          title: 'nosikovРазминка для локтевого суставаРазминка для локтевого сустава',
          name: 'Астахова Е.В.',
          date: new Date(2010, 2, 28),
          durationDays: 5,
        },
        {
          image: video3,
          title: 'nosikovРазминка для локтевого суставаРазминка для локтевого сустава',
          name: 'Астахова Е.В.',
          date: new Date(2010, 2, 28),
          durationDays: 5,
        },
        {
          image: video3,
          title: 'nosikovРазминка для локтевого суставаРазминка для локтевого сустава',
          name: 'Астахова Е.В.',
          date: new Date(2010, 2, 28),
          durationDays: 5,
        },
        {
          image: video3,
          title: 'nosikovРазминка для локтевого суставаРазминка для локтевого сустава',
          name: 'Астахова Е.В.',
          date: new Date(2010, 2, 28),
          durationDays: 5,
        },
        {
          image: video3,
          title: 'nosikovРазминка для локтевого суставаРазминка для локтевого сустава',
          name: 'Астахова Е.В.',
          date: new Date(2010, 2, 28),
          durationDays: 5,
        },
        {
          image: video3,
          title: 'nosikovРазминка для локтевого суставаРазминка для локтевого сустава',
          name: 'Астахова Е.В.',
          date: new Date(2010, 2, 28),
          durationDays: 5,
        },
        {
          image: video3,
          title: 'nosikovРазминка для локтевого суставаРазминка для локтевого сустава',
          name: 'Астахова Е.В.',
          date: new Date(2010, 2, 28),
          durationDays: 5,
        },
        {
          image: video3,
          title: 'nosikovРазминка для локтевого суставаРазминка для локтевого сустава',
          name: 'Астахова Е.В.',
          date: new Date(2010, 2, 28),
          durationDays: 5,
        },
        {
          image: video3,
          title: 'nosikovРазминка для локтевого суставаРазминка для локтевого сустава',
          name: 'Астахова Е.В.',
          date: new Date(2010, 2, 28),
          durationDays: 5,
        },
        {
          image: video3,
          title: 'nosikovРазминка для локтевого суставаРазминка для локтевого сустава',
          name: 'Астахова Е.В.',
          date: new Date(2010, 2, 28),
          durationDays: 5,
        },
        {
          image: video3,
          title: 'nosikovРазминка для локтевого суставаРазминка для локтевого сустава',
          name: 'Астахова Е.В.',
          date: new Date(2010, 2, 28),
          durationDays: 5,
        },
        {
          image: video3,
          title: 'nosikovРазминка для локтевого суставаРазминка для локтевого сустава',
          name: 'Астахова Е.В.',
          date: new Date(2010, 2, 28),
          durationDays: 5,
        },
        {
          image: video3,
          title: 'nosikovРазминка для локтевого суставаРазминка для локтевого сустава',
          name: 'Астахова Е.В.',
          date: new Date(2010, 2, 28),
          durationDays: 5,
        },
      ],
      events: [
        {
          image: event1,
          title: 'nosikovТяга резинки в шаге со сгибанием локтя под 90 градусов',
          format: 'вебинар',
          date: new Date('2019-01-15T12:25:00'),
        },
        {
          image: event1,
          title: 'nosikovТяга резинки в шаге со сгибанием локтя под 90 градусов',
          format: 'вебинар',
          date: new Date('2019-01-15T12:25:00'),
        },
        {
          image: event1,
          title: 'nosikovТяга резинки в шаге со сгибанием локтя под 90 градусов',
          format: 'вебинар',
          date: new Date('2019-01-15T12:25:00'),
        },
        {
          image: event1,
          title: 'nosikovТяга резинки в шаге со сгибанием локтя под 90 градусов',
          format: 'вебинар',
          date: new Date('2019-01-15T12:25:00'),
        },
      ],
    },
    {
      id: 7,
      avatar: Force,
      name: 'Форс Александр',
      email: 'Force@bk.ru',
      sex: 'муж',
      age: 32,
      lat: 83.397,
      lng: 50.644,
      zoom: 8.5,
      telegram: false,
      warn: false,
      selected: false,
      notes: [
        {
          date: new Date(2019, 11, 17),
          note: 'ФорсФизические упражнения способствуют активизации мышечных сокращений, кровотока в тканях, снимают отечность, повышают энергетические возможности мышц. Улучшенное питание мышечной ткани ускоряет замещение различных посттравматических дефектов в самих мышцах, костной ткани, связках и сухожилиях.',
        },
        {
          date: new Date(2018, 11, 17),
          note: 'ФорсУлучшенное питание мышечной ткани ускоряет замещение различных посттравматических дефектов в самих мышцах, костной ткани, связках и сухожилиях.',
        },
      ],
      consultations: [
        {
          consult: 'прием',
          date: new Date('2009-12-15T09:15:00'),
          durationMinutes: 35,
          confirm: false,
        },
        {
          consult: 'прием',
          date: new Date('2009-12-16T09:25:00'),
          durationMinutes: 40,
          confirm: true,
        },
        {
          consult: 'прием',
          date: new Date('2009-12-17T09:35:00'),
          durationMinutes: 45,
          confirm: true,
        },
      ],
      videos: [
        {
          image: video1,
          title: 'ФорсКрабик, ходьба в бок в приседе с двумя резинками Крабик',
          name: 'Астахова Е.В.',
          date: new Date(2013, 7, 21),
          durationDays: 9,
        },
        {
          image: video2,
          title: 'ФорсРазминка для локтевого сустава',
          name: 'Астахова Е.В.',
        },
        {
          image: video3,
          title: 'ФорсРазминка для локтевого суставаРазминка для локтевого сустава',
          name: 'Астахова Е.В.',
          date: new Date(2014, 12, 4),
          durationDays: 17,
        },
        {
          image: video3,
          title: 'ФорсРазминка для локтевого суставаРазминка для локтевого сустава',
          name: 'Астахова Е.В.',
          date: new Date(1999, 1, 1),
          durationDays: 27,
        },
        {
          image: video3,
          title: 'ФорсРазминка для локтевого суставаРазминка для локтевого сустава',
          name: 'Астахова Е.В.',
          date: new Date(2004, 6, 26),
          durationDays: 4,
        },
        {
          image: video3,
          title: 'ФорсРазминка для локтевого суставаРазминка для локтевого сустава',
          name: 'Астахова Е.В.',
          date: new Date(2008, 2, 7),
          durationDays: 3,
        },
      ],
      events: [
        {
          image: event1,
          title: 'ФорсТяга резинки в шаге со сгибанием локтя под 90 градусов',
          format: 'вебинар',
          date: new Date('2019-01-15T12:25:00'),
        },
        {
          image: event1,
          title: 'ФорсТяга резинки в шаге со сгибанием локтя под 90 градусов',
          format: 'вебинар',
          date: new Date('2019-01-15T12:25:00'),
        },
        {
          image: event1,
          title: 'ФорсТяга резинки в шаге со сгибанием локтя под 90 градусов',
          format: 'вебинар',
          date: new Date('2019-01-15T12:25:00'),
        },
        {
          image: event1,
          title: 'ФорсТяга резинки в шаге со сгибанием локтя под 90 градусов',
          format: 'вебинар',
          date: new Date('2019-01-15T12:25:00'),
        },
        {
          image: event1,
          title: 'ФорсТяга резинки в шаге со сгибанием локтя под 90 градусов',
          format: 'вебинар',
          date: new Date('2019-01-15T12:25:00'),
        },
        {
          image: event1,
          title: 'ФорсТяга резинки в шаге со сгибанием локтя под 90 градусов',
          format: 'вебинар',
          date: new Date('2019-01-15T12:25:00'),
        },
        {
          image: event1,
          title: 'ФорсТяга резинки в шаге со сгибанием локтя под 90 градусов',
          format: 'вебинар',
          date: new Date('2019-01-15T12:25:00'),
        },
        {
          image: event1,
          title: 'ФорсТяга резинки в шаге со сгибанием локтя под 90 градусов',
          format: 'вебинар',
          date: new Date('2019-01-15T12:25:00'),
        },
        {
          image: event1,
          title: 'ФорсТяга резинки в шаге со сгибанием локтя под 90 градусов',
          format: 'вебинар',
          date: new Date('2019-01-15T12:25:00'),
        },
        {
          image: event1,
          title: 'ФорсТяга резинки в шаге со сгибанием локтя под 90 градусов',
          format: 'вебинар',
          date: new Date('2019-01-15T12:25:00'),
        },
        {
          image: event1,
          title: 'ФорсТяга резинки в шаге со сгибанием локтя под 90 градусов',
          format: 'вебинар',
          date: new Date('2019-01-15T12:25:00'),
        },
        {
          image: event1,
          title: 'ФорсТяга резинки в шаге со сгибанием локтя под 90 градусов',
          format: 'вебинар',
          date: new Date('2019-01-15T12:25:00'),
        },
        {
          image: event1,
          title: 'ФорсТяга резинки в шаге со сгибанием локтя под 90 градусов',
          format: 'вебинар',
          date: new Date('2019-01-15T12:25:00'),
        },
        {
          image: event1,
          title: 'ФорсТяга резинки в шаге со сгибанием локтя под 90 градусов',
          format: 'вебинар',
          date: new Date('2019-01-15T12:25:00'),
        },
        {
          image: event1,
          title: 'ФорсТяга резинки в шаге со сгибанием локтя под 90 градусов',
          format: 'вебинар',
          date: new Date('2019-01-15T12:25:00'),
        },
        {
          image: event1,
          title: 'ФорсТяга резинки в шаге со сгибанием локтя под 90 градусов',
          format: 'вебинар',
          date: new Date('2019-01-15T12:25:00'),
        },
        {
          image: event1,
          title: 'ФорсТяга резинки в шаге со сгибанием локтя под 90 градусов',
          format: 'вебинар',
          date: new Date('2019-01-15T12:25:00'),
        },
        {
          image: event1,
          title: 'ФорсТяга резинки в шаге со сгибанием локтя под 90 градусов',
          format: 'вебинар',
          date: new Date('2019-01-15T12:25:00'),
        },
        {
          image: event1,
          title: 'ФорсТяга резинки в шаге со сгибанием локтя под 90 градусов',
          format: 'вебинар',
          date: new Date('2019-01-15T12:25:00'),
        },
        {
          image: event1,
          title: 'ФорсТяга резинки в шаге со сгибанием локтя под 90 градусов',
          format: 'вебинар',
          date: new Date('2019-01-15T12:25:00'),
        },
        {
          image: event1,
          title: 'ФорсТяга резинки в шаге со сгибанием локтя под 90 градусов',
          format: 'вебинар',
          date: new Date('2019-01-15T12:25:00'),
        },
        {
          image: event1,
          title: 'ФорсТяга резинки в шаге со сгибанием локтя под 90 градусов',
          format: 'вебинар',
          date: new Date('2019-01-15T12:25:00'),
        },
        {
          image: event1,
          title: 'ФорсТяга резинки в шаге со сгибанием локтя под 90 градусов',
          format: 'вебинар',
          date: new Date('2019-01-15T12:25:00'),
        },
        {
          image: event1,
          title: 'ФорсТяга резинки в шаге со сгибанием локтя под 90 градусов',
          format: 'вебинар',
          date: new Date('2019-01-15T12:25:00'),
        },
        {
          image: event1,
          title: 'ФорсТяга резинки в шаге со сгибанием локтя под 90 градусов',
          format: 'вебинар',
          date: new Date('2019-01-15T12:25:00'),
        },
        {
          image: event1,
          title: 'ФорсТяга резинки в шаге со сгибанием локтя под 90 градусов',
          format: 'вебинар',
          date: new Date('2019-01-15T12:25:00'),
        },
        {
          image: event1,
          title: 'ФорсТяга резинки в шаге со сгибанием локтя под 90 градусов',
          format: 'вебинар',
          date: new Date('2019-01-15T12:25:00'),
        },
        {
          image: event1,
          title: 'ФорсТяга резинки в шаге со сгибанием локтя под 90 градусов',
          format: 'вебинар',
          date: new Date('2019-01-15T12:25:00'),
        },
        {
          image: event1,
          title: 'ФорсТяга резинки в шаге со сгибанием локтя под 90 градусов',
          format: 'вебинар',
          date: new Date('2019-01-15T12:25:00'),
        },
        {
          image: event1,
          title: 'ФорсТяга резинки в шаге со сгибанием локтя под 90 градусов',
          format: 'вебинар',
          date: new Date('2019-01-15T12:25:00'),
        },
        {
          image: event1,
          title: 'ФорсТяга резинки в шаге со сгибанием локтя под 90 градусов',
          format: 'вебинар',
          date: new Date('2019-01-15T12:25:00'),
        },
        {
          image: event1,
          title: 'ФорсТяга резинки в шаге со сгибанием локтя под 90 градусов',
          format: 'вебинар',
          date: new Date('2019-01-15T12:25:00'),
        },
        {
          image: event1,
          title: 'ФорсТяга резинки в шаге со сгибанием локтя под 90 градусов',
          format: 'вебинар',
          date: new Date('2019-01-15T12:25:00'),
        },
      ],
    },
    {
      id: 8,
      avatar: Ahmedov,
      name: 'Ахмедов Артур',
      email: 'ahmedov@mail.ru',
      sex: 'муж',
      age: 38,
      lat: 89.397,
      lng: 179.644,
      zoom: 8.4,
      telegram: false,
      warn: false,
      selected: false,
      notes: [
        {
          date: new Date(2019, 11, 17),
          note: 'АхмедовФизические упражнения способствуют активизации мышечных сокращений, кровотока в тканях, снимают отечность, повышают энергетические возможности мышц. Улучшенное питание мышечной ткани ускоряет замещение различных посттравматических дефектов в самих мышцах, костной ткани, связках и сухожилиях.',
        },
        {
          date: new Date(2018, 11, 17),
          note: 'АхмедовУлучшенное питание мышечной ткани ускоряет замещение различных посттравматических дефектов в самих мышцах, костной ткани, связках и сухожилиях.',
        },
      ],
      consultations: [
        {
          consult: 'прием',
          date: new Date('2021-01-01T20:30:00'),
          durationMinutes: 30,
          confirm: false,
        },
        {
          consult: 'консультация',
          date: new Date('2021-01-01T21:25:00'),
          durationMinutes: 15,
          confirm: false,
        },
        {
          consult: 'прием',
          date: new Date('2021-01-01T22:20:00'),
          durationMinutes: 85,
          confirm: false,
        },
      ],
      videos: [
        {
          image: video1,
          title: 'АхмедовКрабик, ходьба в бок в приседе с двумя резинками Крабик',
          name: 'Астахова Е.В.',
        },
        {
          image: video2,
          title: 'АхмедовРазминка для локтевого сустава',
          name: 'Астахова Е.В.',
          date: new Date(2016, 1, 15),
          durationDays: 8,
        },
        {
          image: video3,
          title: 'АхмедовРазминка для локтевого суставаРазминка для локтевого сустава',
          name: 'Астахова Е.В.',
          date: new Date(2023, 8, 18),
          durationDays: 4,
        },
        {
          image: video1,
          title: 'АхмедовКрабик, ходьба в бок в приседе с двумя резинками Крабик',
          name: 'Астахова Е.В.',
        },
      ],
      events: [
        {
          image: event1,
          title: 'АхмедовТяга резинки в шаге со сгибанием локтя под 90 градусов',
          format: 'вебинар',
          date: new Date('2019-01-15T12:25:00'),
        },
        {
          image: event1,
          title: 'АхмедовТяга резинки в шаге со сгибанием локтя под 90 градусов',
          format: 'вебинар',
          date: new Date('2019-01-15T12:25:00'),
        },
        {
          image: event1,
          title: 'АхмедовТяга резинки в шаге со сгибанием локтя под 90 градусов',
          format: 'вебинар',
          date: new Date('2019-01-15T12:25:00'),
        },
        {
          image: event1,
          title: 'АхмедовТяга резинки в шаге со сгибанием локтя под 90 градусов',
          format: 'вебинар',
          date: new Date('2019-01-15T12:25:00'),
        },
      ],
    },
    {
      id: 9,
      avatar: Blazhevich,
      name: 'Блажевич Игорь',
      email: 'blazhevich@mail.ru',
      sex: 'муж',
      age: 39,
      lat: -66.397,
      lng: -70.644,
      zoom: 8.3,
      telegram: false,
      warn: false,
      selected: false,
      notes: [
        {
          date: new Date(2019, 11, 17),
          note: 'БлажевичФизические упражнения способствуют активизации мышечных сокращений, кровотока в тканях, снимают отечность, повышают энергетические возможности мышц. Улучшенное питание мышечной ткани ускоряет замещение различных посттравматических дефектов в самих мышцах, костной ткани, связках и сухожилиях.',
        },
        {
          date: new Date(2018, 11, 17),
          note: 'БлажевичУлучшенное питание мышечной ткани ускоряет замещение различных посттравматических дефектов в самих мышцах, костной ткани, связках и сухожилиях.',
        },
      ],
      consultations: [
        {
          consult: 'консультация',
          date: new Date('2020-07-11T14:05:00'),
          durationMinutes: 5,
          confirm: false,
        },
        {
          consult: 'прием',
          date: new Date('2020-07-13T16:25:00'),
          durationMinutes: 55,
          confirm: true,
        },
        {
          consult: 'прием',
          date: new Date('2020-07-15T19:20:00'),
          durationMinutes: 105,
          confirm: true,
        },
      ],
      videos: [
        {
          image: video1,
          title: 'БлажевичКрабик, ходьба в бок в приседе с двумя резинками Крабик',
          name: 'Астахова Е.В.',
          date: new Date(2009, 12, 22),
          durationDays: 2,
        },
        {
          image: video2,
          title: 'БлажевичРазминка для локтевого сустава',
          name: 'Астахова Е.В.',
          date: new Date(2010, 11, 15),
          durationDays: 1,
        },
        {
          image: video3,
          title: 'БлажевичРазминка для локтевого суставаРазминка для локтевого сустава',
          name: 'Астахова Е.В.',
          date: new Date(2011, 10, 30),
          durationDays: 3,
        },
        {
          image: video2,
          title: 'БлажевичРазминка для локтевого сустава',
          name: 'Астахова Е.В.',
          date: new Date(2012, 4, 4),
          durationDays: 6,
        },
        {
          image: video3,
          title: 'БлажевичРазминка для локтевого суставаРазминка для локтевого сустава',
          name: 'Астахова Е.В.',
          date: new Date(2013, 5, 18),
          durationDays: 7,
        },
      ],
      events: [
        {
          image: event1,
          title: 'БлажевичТяга резинки в шаге со сгибанием локтя под 90 градусов',
          format: 'вебинар',
          date: new Date('2019-01-15T12:25:00'),
        },
        {
          image: event1,
          title: 'БлажевичТяга резинки в шаге со сгибанием локтя под 90 градусов',
          format: 'вебинар',
          date: new Date('2019-01-15T12:25:00'),
        },
        {
          image: event1,
          title: 'БлажевичТяга резинки в шаге со сгибанием локтя под 90 градусов',
          format: 'вебинар',
          date: new Date('2019-01-15T12:25:00'),
        },
        {
          image: event1,
          title: 'БлажевичТяга резинки в шаге со сгибанием локтя под 90 градусов',
          format: 'вебинар',
          date: new Date('2019-01-15T12:25:00'),
        },
      ],
    },
    {
      id: 10,
      avatar: Blazhevich,
      name: 'Валиева Руфина',
      email: 'valieva@mail.ru',
      sex: 'жен',
      age: 27,
      lat: -74.397,
      lng: 122.644,
      zoom: 8.2,
      telegram: false,
      warn: false,
      selected: false,
      notes: [
        {
          date: new Date(2019, 11, 17),
          note: 'ВалиеваФизические упражнения способствуют активизации мышечных сокращений, кровотока в тканях, снимают отечность, повышают энергетические возможности мышц. Улучшенное питание мышечной ткани ускоряет замещение различных посттравматических дефектов в самих мышцах, костной ткани, связках и сухожилиях.',
        },
        {
          date: new Date(2018, 11, 17),
          note: 'ВалиеваУлучшенное питание мышечной ткани ускоряет замещение различных посттравматических дефектов в самих мышцах, костной ткани, связках и сухожилиях.',
        },
      ],
      consultations: [
        {
          consult: 'прием',
          date: new Date('2023-06-15T10:35:00'),
          durationMinutes: 35,
          confirm: true,
        },
        {
          consult: 'прием',
          date: new Date('2023-07-15T15:25:00'),
          durationMinutes: 25,
          confirm: true,
        },
        {
          consult: 'консультация',
          date: new Date('2023-08-15T16:20:00'),
          durationMinutes: 65,
          confirm: true,
        },
      ],
      videos: [
        {
          image: video1,
          title: 'ВалиеваКрабик, ходьба в бок в приседе с двумя резинками Крабик',
          name: 'Астахова Е.В.',
        },
        {
          image: video2,
          title: 'ВалиеваРазминка для локтевого сустава',
          name: 'Астахова Е.В.',
          date: new Date(2007, 12, 1),
          durationDays: 1,
        },
        {
          image: video3,
          title: 'ВалиеваРазминка для локтевого суставаРазминка для локтевого сустава',
          name: 'Астахова Е.В.',
          date: new Date(2008, 12, 2),
          durationDays: 2,
        },
      ],
      events: [
        {
          image: event1,
          title: 'ВалиеваТяга резинки в шаге со сгибанием локтя под 90 градусов',
          format: 'вебинар',
          date: new Date('2019-01-15T12:25:00'),
        },
        {
          image: event1,
          title: 'ВалиеваТяга резинки в шаге со сгибанием локтя под 90 градусов',
          format: 'вебинар',
          date: new Date('2019-01-15T12:25:00'),
        },
        {
          image: event1,
          title: 'ВалиеваТяга резинки в шаге со сгибанием локтя под 90 градусов',
          format: 'вебинар',
          date: new Date('2019-01-15T12:25:00'),
        },
        {
          image: event1,
          title: 'ВалиеваТяга резинки в шаге со сгибанием локтя под 90 градусов',
          format: 'вебинар',
          date: new Date('2019-01-15T12:25:00'),
        },
      ],
    },
    {
      id: 11,
      avatar: Voloshina,
      name: 'Волошина Виктория',
      email: 'voloshina@mail.ru',
      sex: 'жен',
      age: 22,
      lat: 93.397,
      lng: -140.644,
      zoom: 8.1,
      telegram: false,
      warn: false,
      selected: false,
      notes: [
        {
          date: new Date(2019, 11, 17),
          note: 'ВолошинаФизические упражнения способствуют активизации мышечных сокращений, кровотока в тканях, снимают отечность, повышают энергетические возможности мышц. Улучшенное питание мышечной ткани ускоряет замещение различных посттравматических дефектов в самих мышцах, костной ткани, связках и сухожилиях.',
        },
        {
          date: new Date(2018, 11, 17),
          note: 'ВолошинаУлучшенное питание мышечной ткани ускоряет замещение различных посттравматических дефектов в самих мышцах, костной ткани, связках и сухожилиях.',
        },
      ],
      consultations: [
        {
          consult: 'прием',
          date: new Date('2000-04-18T21:30:00'),
          durationMinutes: 30,
          confirm: true,
        },
        {
          consult: 'консультация',
          date: new Date('2000-04-19T22:25:00'),
          durationMinutes: 40,
          confirm: false,
        },
        {
          consult: 'консультация',
          date: new Date('2000-04-20T00:20:00'),
          durationMinutes: 45,
          confirm: false,
        },
      ],
      videos: [
        {
          image: video1,
          title: 'ВолошинаКрабик, ходьба в бок в приседе с двумя резинками Крабик',
          name: 'Астахова Е.В.',
        },
        {
          image: video2,
          title: 'ВолошинаРазминка для локтевого сустава',
          name: 'Астахова Е.В.',
          date: new Date(2019, 1, 15),
          durationDays: 7,
        },
        {
          image: video3,
          title: 'ВолошинаРазминка для локтевого суставаРазминка для локтевого сустава',
          name: 'Астахова Е.В.',
          date: new Date(2019, 1, 15),
          durationDays: 7,
        },
      ],
      events: [
        {
          image: event1,
          title: 'ВолошинаТяга резинки в шаге со сгибанием локтя под 90 градусов',
          format: 'вебинар',
          date: new Date('2019-01-15T12:25:00'),
        },
        {
          image: event1,
          title: 'ВолошинаТяга резинки в шаге со сгибанием локтя под 90 градусов',
          format: 'вебинар',
          date: new Date('2019-01-15T12:25:00'),
        },
        {
          image: event1,
          title: 'ВолошинаТяга резинки в шаге со сгибанием локтя под 90 градусов',
          format: 'вебинар',
          date: new Date('2019-01-15T12:25:00'),
        },
        {
          image: event1,
          title: 'ВолошинаТяга резинки в шаге со сгибанием локтя под 90 градусов',
          format: 'вебинар',
          date: new Date('2019-01-15T12:25:00'),
        },
      ],
    },
    {
      id: 12,
      avatar: Voloshina,
      name: 'Волошина Виктория',
      email: 'voloshina@mail.ru',
      sex: 'жен',
      age: 22,
      lat: -48.397,
      lng: 45.644,
      zoom: 7.9,
      telegram: false,
      warn: false,
      selected: false,
      notes: [
        {
          date: new Date(2019, 11, 17),
          note: 'ВолошинаФизические упражнения способствуют активизации мышечных сокращений, кровотока в тканях, снимают отечность, повышают энергетические возможности мышц. Улучшенное питание мышечной ткани ускоряет замещение различных посттравматических дефектов в самих мышцах, костной ткани, связках и сухожилиях.',
        },
        {
          date: new Date(2018, 11, 17),
          note: 'ВолошинаУлучшенное питание мышечной ткани ускоряет замещение различных посттравматических дефектов в самих мышцах, костной ткани, связках и сухожилиях.',
        },
      ],
      consultations: [
        {
          consult: 'консультация',
          date: new Date('2016-03-15T12:00:00'),
          durationMinutes: 30,
          confirm: true,
        },
        {
          consult: 'консультация',
          date: new Date('2016-03-25T19:25:00'),
          durationMinutes: 40,
          confirm: false,
        },
        {
          consult: 'прием',
          date: new Date('2016-03-31T18:20:00'),
          durationMinutes: 45,
          confirm: false,
        },
      ],
      videos: [
        {
          image: video1,
          title: 'ВолошинаКрабик, ходьба в бок в приседе с двумя резинками Крабик',
          name: 'Астахова Е.В.',
        },
        {
          image: video2,
          title: 'ВолошинаРазминка для локтевого сустава',
          name: 'Астахова Е.В.',
          date: new Date(2019, 1, 15),
          durationDays: 7,
        },
        {
          image: video3,
          title: 'ВолошинаРазминка для локтевого суставаРазминка для локтевого сустава',
          name: 'Астахова Е.В.',
          date: new Date(2019, 1, 15),
          durationDays: 7,
        },
      ],
      events: [
        {
          image: event1,
          title: 'ВолошинаТяга резинки в шаге со сгибанием локтя под 90 градусов',
          format: 'вебинар',
          date: new Date('2019-01-15T12:25:00'),
        },
        {
          image: event1,
          title: 'ВолошинаТяга резинки в шаге со сгибанием локтя под 90 градусов',
          format: 'вебинар',
          date: new Date('2019-01-15T12:25:00'),
        },
        {
          image: event1,
          title: 'ВолошинаТяга резинки в шаге со сгибанием локтя под 90 градусов',
          format: 'вебинар',
          date: new Date('2019-01-15T12:25:00'),
        },
        {
          image: event1,
          title: 'ВолошинаТяга резинки в шаге со сгибанием локтя под 90 градусов',
          format: 'вебинар',
          date: new Date('2019-01-15T12:25:00'),
        },
      ],
    },
  ];
  count = 12;
  filter = '';
  allChecked = false;
  active = 2;
  select = false;
  constructor() {
    makeAutoObservable(this);
  }

  setActive(n: number) {
    this.active = n;
  }
  setChecked(n: number) {
    const user = this.users.find((el) => el.id == n);
    if (user) user.selected = !user.selected;
  }
  setAllChecked() {
    this.users.forEach((el) => (el.selected = !this.allChecked));
    this.allChecked = !this.allChecked;
  }
  setSelect() {
    this.select = !this.select;
  }
  setFilter(str: string) {
    this.filter = str;
  }
}

export default new UsersState();
