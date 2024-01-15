import { FaMedal } from 'react-icons/fa';
import { BsJournalMedical } from 'react-icons/bs';

export const navbarLinks = [
  {
    linkLabel: 'Início',
    href: '/',
  },
  {
    linkLabel: 'Informações',
    subMenuLinks: [
      {
        label: 'Wiki',
        href: '/info/wiki',
        icon: BsJournalMedical,
      },
      {
        label: 'Monstros',
        href: '/info/monsters',
      },
      {
        label: 'Classes de Personagens',
        href: '/info/character-classes',
      },
    ],
  },
  {
    linkLabel: 'Downloads',
    href: '/downloads',
  },
  {
    linkLabel: 'Rankings',
    subMenuLinks: [
      {
        label: 'Nível',
        href: '/rankings/level',
        icon: FaMedal,
      },
    ],
  },
  {
    linkLabel: 'Contas do Jogo',
    href: '/game-accounts',
    isProtected: true,
  },
];
