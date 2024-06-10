import { Component } from '@angular/core';





interface TabGroup {
 Title : string,
 Items : TabItem[],
}

interface TabItem {
  Title: string,
  IconPath: string,
}


@Component({
  selector: 'beat-tab-item',
  templateUrl: './tab-item.component.html',
  styles: ['.web-icon{width: 50px;}']
})
export class TabItemComponent {
  public INITIAL_ICON_PATH : string = 'assets/icons/';
  public technologyItems : TabGroup[] = [
    {Title: 'FrontEnd', Items: [
                                    {Title: 'Angular', IconPath: 'favicon.ico'},
                                    {Title: 'Bootstrap', IconPath: 'icon-btp.svg'}
                              ]},
    {Title: 'BackEnd', Items: [
                                    {Title: 'C#', IconPath: 'icon-cs.svg'},
                                    {Title: 'ColdFusion', IconPath: 'icon-cfsn.svg'},
                                    {Title: 'Java', IconPath: 'icon-jv.svg'},
                                    {Title: 'PHP', IconPath: 'icon-php.svg'}]},
    {Title: 'Frameworks', Items:    [
                                    {Title: 'Angular', IconPath: 'favicon.ico'},
                                    {Title: '.NET MVC', IconPath: 'icon-net.svg'},
                                    {Title: '.NET API', IconPath: 'icon-net.svg'},
                                    {Title: 'Laravel', IconPath: 'icon-lv.svg'},
                                    ]},
    {Title: 'Base de Datos', Items: [
                                    {Title: 'SQL Server', IconPath: 'icon-sqls.svg'},
                                    {Title: 'My SQL', IconPath: 'icon-mysql.svg'},
                                    {Title: 'PostgresSQL', IconPath: 'icon-postrg.svg'}
                                    ]},
    {Title: 'Software', Items: [
                                    {Title: 'Visual Studio', IconPath: 'icon-vs.svg'},
                                    {Title: 'VS Code', IconPath: 'icon-vsc.svg'},
                                    {Title: 'DBeaver', IconPath: 'icon-dbv.svg'},
                                    {Title: 'Postman', IconPath: 'icon-pstn.svg'},
                                    {Title: 'WinSCP', IconPath: 'icon-winscp.svg'},
                                    {Title: 'Android Studio', IconPath: 'icon-as.svg'},
                                    ]},
    {Title: 'Tecnologia en la nube', Items: [
                                    {Title: 'Azure', IconPath: 'icon-az.svg'},
                                    {Title: 'IBM Cloud', IconPath: 'icon-ibm.svg'},

                                    ]},
  ];

}
