export interface  MenuItem {
  label: string,
  target: string,
  route: string,
  //TODO: Tomar en cuenta submenus y su uso como navigator o evento
  subMenu? : MenuItem[]
}
