interface Version {
  id: string;
  year: number;
  format: string;
  country: string;
  label: string;
  catNo: string;
  notes?: string;
  price?: string;
}

export interface Album {
  id: string;
  title: string;
  releaseYear: number;
  artwork: string;
  versions: number;
  rating: number;
  formats: string[];
  type: 'album' | 'single' | 'compilation' | 'video';
  versionsList: Version[];
}

export const discography: Album[] = [
  {
    id: 'ram',
    title: 'Random Access Memories',
    releaseYear: 2013,
    artwork:
      'https://i.discogs.com/zFVZE4s0zSXUIM7OMl2UDckSq0zlopdHBHRz23zqMJk/rs:fit/g:sm/q:90/h:600/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTQ1NzAz/NjYtMTUzOTI5NTA5/Mi02MDg3LnBuZw.jpeg',
    versions: 142,
    rating: 4.8,
    type: 'album',
    formats: ['2xLP', 'CD', 'Digital'],
    versionsList: [
      {
        id: 'v1',
        year: 2013,
        format: '2xLP, Album',
        country: 'US',
        label: 'Columbia',
        catNo: '88883716861',
        notes: 'Gatefold sleeve, 180g vinyl',
        price: '$34.99',
      },
    ],
  },
  {
    id: 'discovery',
    title: 'Discovery',
    releaseYear: 2001,
    artwork:
      'https://i.discogs.com/6gMPje3DUKa1LMojsHtGTE5o4fIQon5lYaIJvALlvVM/rs:fit/g:sm/q:90/h:600/w:592/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTI4Nzkt/MTIzNjAzNTQ3Mi5q/cGVn.jpeg',
    versions: 98,
    rating: 4.9,
    type: 'album',
    formats: ['2xLP', 'CD', 'Digital'],
    versionsList: [
      {
        id: 'v1',
        year: 2001,
        format: '2xLP, Album',
        country: 'US',
        label: 'Virgin',
        catNo: 'V2940',
        notes: 'Original pressing',
        price: '$45.99',
      },
    ],
  },
  {
    id: 'homework',
    title: 'Homework',
    releaseYear: 1997,
    artwork:
      'https://i.discogs.com/Tgzu71VlahJ9X8cu0eaqutNNlPWJOqelug4Czwwa6BM/rs:fit/g:sm/q:90/h:600/w:589/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTI5NDc2/NTUtMTY3MDAwMjM2/NC01MjE4LmpwZWc.jpeg',
    versions: 76,
    rating: 4.7,
    type: 'album',
    formats: ['2xLP', 'CD', 'Digital'],
    versionsList: [
      {
        id: 'v1',
        year: 1997,
        format: '2xLP, Album',
        country: 'France',
        label: 'Virgin',
        catNo: 'V2821',
        notes: 'First pressing',
        price: '$89.99',
      },
    ],
  },
  {
    id: 'human-after-all',
    title: 'Human After All',
    releaseYear: 2005,
    artwork:
      'https://i.discogs.com/FEWXTwkcL0-QDeeH_uXA7HwRqjXBujz-6Mic0gx6Ds8/rs:fit/g:sm/q:90/h:600/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTQxNzY4/Ni0xMzQ3NTc0NzU3/LTgwNDguanBlZw.jpeg',
    versions: 52,
    rating: 4.6,
    type: 'album',
    formats: ['2xLP', 'CD', 'Digital'],
    versionsList: [
      {
        id: 'v1',
        year: 2005,
        format: '2xLP, Album',
        country: 'Europe',
        label: 'Virgin',
        catNo: 'VX3003',
        notes: 'Original pressing',
        price: '$48.00',
      },
    ],
  },
  {
    id: 'alive-1997',
    title: 'Alive 1997',
    releaseYear: 2001,
    artwork:
      'https://i.discogs.com/NvfyPC4OVCXxcqVnWURYdJzxzqfvlmgg8PLVyoIJva4/rs:fit/g:sm/q:90/h:600/w:584/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTEzNjgy/LTE0Nzc0NzgzMjMt/MzQzMi5qcGVn.jpeg',
    versions: 45,
    rating: 4.8,
    type: 'album',
    formats: ['LP', 'CD', 'Digital'],
    versionsList: [
      {
        id: 'v1',
        year: 2001,
        format: 'LP, Album, Live',
        country: 'Europe',
        label: 'Virgin',
        catNo: 'VX3001',
        notes: 'Live recording from 1997',
        price: '$41.99',
      },
    ],
  },
  {
    id: 'alive-2007',
    title: 'Alive 2007',
    releaseYear: 2007,
    artwork:
      'https://i.discogs.com/3z9ppYLGHqhSzWWAw2FrUxxCAgA-dn_vOpvNEwGX6xc/rs:fit/g:sm/q:90/h:523/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTExNDEx/MjMtMTE5NTgyMzE2/My5qcGVn.jpeg',
    versions: 45,
    rating: 4.8,
    type: 'album',
    formats: ['2xLP', 'CD', 'Digital'],
    versionsList: [
      {
        id: 'v1',
        year: 2007,
        format: '2xLP, Album, Live',
        country: 'Europe',
        label: 'Virgin',
        catNo: 'VX3002',
        notes: 'Live recording from 2007 tour',
        price: '$41.99',
      },
    ],
  },
  {
    id: 'tron-legacy',
    title: 'TRON: Legacy',
    releaseYear: 2010,
    artwork:
      'https://i.discogs.com/Ie-ZAT_Lbvc1dGud11MDw3RKO65NQrzPKkBvqVVk7Hg/rs:fit/g:sm/q:90/h:600/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTgwODk5/NDctMTQ1NTM2MDIz/OC0zNDgwLmpwZWc.jpeg',
    versions: 52,
    rating: 4.6,
    type: 'album',
    formats: ['2xLP', 'CD', 'Digital'],
    versionsList: [
      {
        id: 'v1',
        year: 2010,
        format: '2xLP, Album, Soundtrack',
        country: 'US',
        label: 'Walt Disney Records',
        catNo: 'D000633401',
        notes: 'Original soundtrack',
        price: '$43.99',
      },
    ],
  },
  {
    id: 'tron-legacy-reconfigured',
    title: 'TRON: Legacy Reconfigured',
    releaseYear: 2011,
    artwork:
      'https://i.discogs.com/QLYxshW1O6j5oDcniwXKkO0XbTEbex13gJSN6CQqLZA/rs:fit/g:sm/q:90/h:480/w:480/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTU2NzUx/MjctMTM5OTY0NTY3/NC02NTE3LmpwZWc.jpeg',
    versions: 28,
    rating: 4.5,
    type: 'album',
    formats: ['2xLP', 'CD', 'Digital'],
    versionsList: [
      {
        id: 'v1',
        year: 2011,
        format: '2xLP, Album, Remix',
        country: 'US',
        label: 'Walt Disney Records',
        catNo: 'D000633402',
        notes: 'Remix album',
        price: '$39.99',
      },
    ],
  },
  {
    id: 'daft-club',
    title: 'Daft Club',
    releaseYear: 2003,
    artwork:
      'https://i.discogs.com/Lb1rpZpe0g73mNHaQiC0GWudPhCe6rlG_RYhAHemqzA/rs:fit/g:sm/q:90/h:540/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTIxMjI3/Ny0xMTYwNzU0NzQ5/LmpwZWc.jpeg',
    versions: 32,
    rating: 4.4,
    type: 'compilation',
    formats: ['2xLP', 'CD', 'Digital'],
    versionsList: [
      {
        id: 'v1',
        year: 2003,
        format: '2xLP, Compilation',
        country: 'Europe',
        label: 'Virgin',
        catNo: 'VX3004',
        notes: 'Remix compilation',
        price: '$35.99',
      },
    ],
  },
  {
    id: 'musique-vol-1',
    title: 'Musique Vol. 1 (1993-2005)',
    releaseYear: 2006,
    artwork:
      'https://i.discogs.com/GidVGmr_DlC0HNUEiMaODUNIZIy6nn_w4vLJAuRBMcU/rs:fit/g:sm/q:90/h:587/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTY5OTA1/Ni0xMTU3MDUzNjI2/LmpwZWc.jpeg',
    versions: 24,
    rating: 4.5,
    type: 'compilation',
    formats: ['2xLP', 'CD', 'Digital'],
    versionsList: [
      {
        id: 'v1',
        year: 2006,
        format: '2xLP, Compilation',
        country: 'Europe',
        label: 'Virgin',
        catNo: 'VX3005',
        notes: 'Greatest hits compilation',
        price: '$37.99',
      },
    ],
  },
  {
    id: 'human-after-all-remixes',
    title: 'Human After All: Remixes',
    releaseYear: 2006,
    artwork:
      'https://i.discogs.com/64zqASnYXLB3eKttP9L6GHovsngp1jIgE7q4iRcDX4c/rs:fit/g:sm/q:90/h:600/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTY1Njcw/Mi0xMTUxNTUxMDA0/LmpwZWc.jpeg',
    versions: 18,
    rating: 4.4,
    type: 'compilation',
    formats: ['2xLP', 'CD', 'Digital'],
    versionsList: [
      {
        id: 'v1',
        year: 2006,
        format: '2xLP, Compilation, Remix',
        country: 'Japan',
        label: 'Virgin',
        catNo: 'VX3006',
        notes: 'Japan-exclusive remix album',
        price: '$42.99',
      },
    ],
  },
  {
    id: 'dj-hero-renegade',
    title: 'DJ Hero: Renegade Edition',
    releaseYear: 2009,
    artwork:
      'https://i.discogs.com/ui2ngUMULNgmoGXsPeH_k6HvRgQv8suyamhWfb7D0JA/rs:fit/g:sm/q:90/h:600/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTE3MzE0/MTY4LTE2MTM5MTQ1/NTAtMjUxMC5qcGVn.jpeg',
    versions: 12,
    rating: 4.3,
    type: 'compilation',
    formats: ['2xCD', 'Digital'],
    versionsList: [
      {
        id: 'v1',
        year: 2009,
        format: '2xCD, Compilation, Mixed',
        country: 'US',
        label: 'Activision',
        catNo: 'DJHR001',
        notes: 'Video game soundtrack',
        price: '$29.99',
      },
    ],
  },
  {
    id: 'ram-drumless',
    title: 'Random Access Memories (Drumless Edition)',
    releaseYear: 2023,
    artwork:
      'https://i.discogs.com/Mg4ZMl75Fak1-BMzhDv-lp7orqsrkCH8ujm6w9iFaJY/rs:fit/g:sm/q:90/h:600/w:589/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTI4OTI0/MTIwLTE3MDg0MzQ5/NzktMzU1OC5qcGVn.jpeg',
    versions: 8,
    rating: 4.4,
    type: 'album',
    formats: ['2xLP', 'Digital'],
    versionsList: [
      {
        id: 'v1',
        year: 2023,
        format: '2xLP, Album, Special Edition',
        country: 'US',
        label: 'Columbia',
        catNo: '19658773731',
        notes: 'Special drumless edition',
        price: '$55.00',
      },
    ],
  },
  {
    id: 'ram-10th-anniversary',
    title: 'Random Access Memories (10th Anniversary Edition)',
    releaseYear: 2023,
    artwork:
      'https://i.discogs.com/f8_B05PM2c1GRREU9cQNr1pYBr2C_7qmvVhLM48NYXo/rs:fit/g:sm/q:90/h:600/w:599/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTI3MDMx/NzQzLTE2ODM5Nzk2/MjEtMzE1My5qcGVn.jpeg',
    versions: 15,
    rating: 4.8,
    type: 'album',
    formats: ['3xLP', 'CD', 'Digital'],
    versionsList: [
      {
        id: 'v1',
        year: 2023,
        format: '3xLP, Album, Anniversary Edition',
        country: 'US',
        label: 'Columbia',
        catNo: '19658773732',
        notes: '10th anniversary edition with bonus tracks',
        price: '$68.00',
      },
    ],
  },
  {
    id: 'd-a-f-t',
    title: 'D.A.F.T.: A Story About Dogs, Androids, Firemen and Tomatoes',
    releaseYear: 2000,
    artwork:
      'https://i.discogs.com/r-ZFIXE9soyEgf4QWhCdC8_aWmc9bjUgQ8rwn4GB3gY/rs:fit/g:sm/q:90/h:600/w:475/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTIwMTI3/MjY4LTE2MzA4NzAz/MzktMzM1NC5qcGVn.jpeg',
    versions: 22,
    rating: 4.7,
    type: 'video',
    formats: ['DVD', 'VHS'],
    versionsList: [
      {
        id: 'v1',
        year: 2000,
        format: 'DVD, Video',
        country: 'Europe',
        label: 'Virgin',
        catNo: 'VX3007',
        notes: 'Music video collection',
        price: '$24.99',
      },
    ],
  },
  {
    id: 'interstella-5555',
    title: 'Interstella 5555: The 5tory of the 5ecret 5tar 5ystem',
    releaseYear: 2003,
    artwork:
      'https://i.discogs.com/oIVexqZgP0bVXylfGQzSrKIDylHdYUcGLVEvWepv7xo/rs:fit/g:sm/q:90/h:600/w:415/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTQ3MzE3/MjQtMTQ3NDIwMTQ1/Ny0yNzg1LmpwZWc.jpeg',
    versions: 18,
    rating: 4.9,
    type: 'video',
    formats: ['DVD', 'Blu-ray'],
    versionsList: [
      {
        id: 'v1',
        year: 2003,
        format: 'DVD, Video',
        country: 'Japan',
        label: 'EMI',
        catNo: 'TOBW-3107',
        notes: 'Animated film',
        price: '$29.99',
      },
    ],
  },
];
