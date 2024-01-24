

type INavList = {
  title: string,
  path: string,
  icon: string
}[]

export const navListData:INavList = [
  {
    title: 'Overview',
    path: '/overview',
    icon: 'GoGraph'
  },
  {
    title: 'Transactions',
    path: '/transactions',
    icon: 'IoList'
  },
  {
    title: 'Cards',
    path: '/cards',
    icon: 'CiCreditCard1'
  },
  {
    title: 'Invoices',
    path: '/invoices',
    icon: 'IoDocumentOutline'

  },
  {
    title: 'Goals',
    path: '/goals',
    icon: 'FiAward'

  },
  {
    title: 'Settings',
    path: '/settings',
    icon: 'IoSettingsOutline'
  },
]