import { CSSProperties } from 'react';

export const styles: { [key: string]: CSSProperties } = {
  wrapper: {
    position: 'relative',
  },
  menu: {
    position: 'absolute',
    display: 'flex',
    flexDirection: 'column',
    top: 46,
    right: 0,
    padding: 18,
    gap: 12,
    backgroundColor: '#222222',
    borderRadius: 4,
  },
  menuItem: {
    fontWeight: 'bold',
    fontSize: '1.15rem',
    whiteSpace: 'nowrap',
    color: '#d1d1d1',
    cursor: 'pointer',
  },
};
