import { CSSProperties } from 'react';

export const styles: { [key: string]: CSSProperties } = {
  wrapper: {
    position: 'relative',
  },
  button: {
    width: 180,
    minWidth: 180,
    maxWidth: 180,
    height: 40,
    borderRadius: 12,
    outline: 'none',
    cursor: 'pointer',
    padding: '0 12px',
    borderWidth: 2,
    borderColor: '#f1f1f1',
    backgroundColor: 'black',
    color: '#f1f1f1',
    fontSize: 18,
    fontWeight: '800',
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
