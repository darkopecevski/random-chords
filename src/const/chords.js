const allChords = ['C', 'D', 'Dm', 'G', 'E', 'Em', 'A', 'Am', 'F', 'H'];
const defaultChords = ['C', 'D', 'G', 'Dm', 'E', 'A'];
const chordConfiguration = {
  D: [
    {
      label: 'E',
      openString: '',
      frets: ['', '2', ''],
    },
    {
      label: 'B',
      openString: '',
      frets: ['', '', '3'],
    },
    {
      label: 'G',
      openString: '',
      frets: ['', '1', ''],
    },
    {
      label: 'D',
      openString: 'O',
      frets: ['', '', ''],
    },
    {
      label: 'A',
      openString: 'X',
      frets: ['', '', ''],
    },
    {
      label: 'E',
      openString: 'X',
      frets: ['', '', ''],
    },
  ],
  A: [
    {
      label: 'E',
      openString: 'O',
      frets: ['', '', ''],
    },
    {
      label: 'B',
      openString: '',
      frets: ['', '3', ''],
    },
    {
      label: 'G',
      openString: '',
      frets: ['', '2', ''],
    },
    {
      label: 'D',
      openString: '',
      frets: ['', '1', ''],
    },
    {
      label: 'A',
      openString: 'O',
      frets: ['', '', ''],
    },
    {
      label: 'E',
      openString: 'X',
      frets: ['', '', ''],
    },
  ],
  G: [
    {
      label: 'E',
      openString: '',
      frets: ['', '', '4'],
    },
    {
      label: 'B',
      openString: '',
      frets: ['', '', '3'],
    },
    {
      label: 'G',
      openString: 'O',
      frets: ['', '', ''],
    },
    {
      label: 'D',
      openString: 'O',
      frets: ['', '', ''],
    },
    {
      label: 'A',
      openString: '',
      frets: ['', '1', ''],
    },
    {
      label: 'E',
      openString: '',
      frets: ['', '', '2'],
    },
  ],
  C: [
    {
      label: 'E',
      openString: 'O',
      frets: ['', '', ''],
    },
    {
      label: 'B',
      openString: '',
      frets: ['1', '', ''],
    },
    {
      label: 'G',
      openString: 'O',
      frets: ['', '', ''],
    },
    {
      label: 'D',
      openString: '',
      frets: ['', '2', ''],
    },
    {
      label: 'A',
      openString: '',
      frets: ['', '', '3'],
    },
    {
      label: 'E',
      openString: 'X',
      frets: ['', '', ''],
    },
  ],
};
export { allChords, defaultChords, chordConfiguration };
