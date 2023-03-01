import { CSSProperties } from 'react';

export const styles: { [key: string]: CSSProperties } = {
  background: {
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backdropFilter: 'blur(3px)',
    backgroundColor: '#f1f1f133',
    zIndex: 2,
    padding: 24,
  },
  card: {
    flexDirection: 'column',
    backgroundColor: 'black',
    borderRadius: 12,
    zIndex: 10,
    padding: 24,
    maxHeight: '100%',
    width: '100%',
    maxWidth: 360,
    boxShadow: 'rgba(14, 15, 16, 0.1) 3px 9px 24px',
    overflowX: 'hidden',
    gap: 12,
    animation: 'fadeIn 150ms linear',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: 60,
    cursor: 'pointer',
    padding: 12,
    borderRadius: 3,
  },
  info: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  icon: {
    borderRadius: '50%',
  },
  name: {
    textTransform: 'uppercase',
    fontSize: '18pt',
  },
};
