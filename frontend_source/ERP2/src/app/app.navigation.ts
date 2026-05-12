export const NavigationItems = [
  {
    title: 'Dashboard',
    tags: 'Dashboard Production KPI Output Efficiency',
    icon: 'fal fa-chart-line',
    routerLink: '/dashboard',
    roles: ['user', 'admin', 'super_admin']
  },
  {
    title: 'ERP Master Data',
    tags: 'Settings ERP Master Data',
    icon: 'fal fa-list',
    roles: ['user', 'admin', 'super_admin'],
    items: [
      {
        title: 'Role Settings',
        tags: 'Role Settings Authorization Permissions',
        routerLink: '/settings/role-settings',
        roles: ['admin', 'super_admin']
      },
      {
        title: 'Users',
        tags: 'Users Accounts Login Authorization',
        routerLink: '/settings/users',
        roles: ['user', 'admin', 'super_admin']
      },
      {
        title: 'Company Info',
        tags: 'Company Infor',
        routerLink: '/settings/companys',
        roles: ['super_admin']
      }, 
      {
        title: 'Countries',
        tags: 'Countries',
        routerLink: '/settings/countries',
        roles: ['user', 'admin', 'super_admin']
      },
      {
        title: 'Currencies',
        tags: ' Currencies ',
        routerLink: '/settings/currencies',
        roles: ['user', 'admin', 'super_admin']
      },
      {
        title: 'Regions',
        tags: 'Regions ',
        routerLink: '/settings/regions',
        roles: ['user', 'admin', 'super_admin']
      },
      {
        title: 'Factory Code',
        tags: 'Factory Code ',
        routerLink: '/settings/factorycodes',
        roles: ['user', 'admin', 'super_admin']
      },
      {
        title: 'Payment Terms',
        tags: 'Payment Terms ',
        routerLink: '/settings/paymentterms',
        roles: ['user', 'admin', 'super_admin']
      },
      {
        title: 'Departments',
        tags: 'Departments ',
        routerLink: '/settings/departments',
        roles: ['user', 'admin', 'super_admin']
      },
      {
        title: 'Vendors Groups',
        tags: 'Vendor Groups ',
        routerLink: '/settings/vendorgroups',
        roles: ['user', 'admin', 'super_admin']
      },
      {
        title: 'Vendors',
        tags: 'Vendors ',
        routerLink: '/settings/vendors',
        roles: ['user', 'admin', 'super_admin']
      },

    ]
  },
  {
    title: 'Materials',
    tags: 'Materials',
    icon: 'fal fa-flask',
    roles: ['user', 'admin', 'super_admin'],
    items: [
      {
        title: 'Materials',
        tags: 'Materials',
        routerLink: '/merchandise/main'
      },
      {
        title: 'UOM',
        tags: 'Unit of Measurement ',
        routerLink: '/settings/uoms'
      },

    ]
  },
  {
    title: 'Warehouse',
    tags: 'Warehouse',
    icon: 'fal fa-warehouse',
    roles: ['user', 'admin', 'super_admin'],
    items: [
      {
        title: 'Warehouse',
        tags: 'Warehouse',
        routerLink: '/warehouse/warehouses'
      },
      {
        title: 'Section',
        tags: 'Section',
        routerLink: '/warehouse/sections'
      },
      {
        title: 'Lines',
        tags: 'Lines',
        routerLink: '/warehouse/lines'
      },
      {
        title: 'Racks',
        tags: 'Racks',
        routerLink: '/warehouse/racks'
      },


    ]
  },
  {
    title: 'Customers',
    tags: 'Customers',
    icon: 'fal fa-users',
    roles: ['user', 'admin', 'super_admin'],
    items: [
      {
        title: 'Clients',
        tags: 'Client',
        routerLink: '/customer/clients'
      }
      , {
        title: 'Customers',
        tags: 'Customers',
        routerLink: '/customer/customers'
      }, {
        title: 'Customer Account Group',
        tags: 'Customers',
        routerLink: '/customer/customeraccgroups'
      }
      , {
        title: 'Customers Account Data',
        tags: 'Customers Account Data',
        routerLink: '/customer/customeraccdatas'
      }
      , {
        title: 'Forwarder',
        tags: 'Forwarder',
        routerLink: '/customer/forwarders'
      }
      , {
        title: 'Customer Export Data',
        tags: 'Customer Export Data',
        routerLink: '/customer/customerexportdatas'
      }
      , {
        title: 'Customer Labelling Data',
        tags: 'Customer Labelling Data',
        routerLink: '/customer/customerlabelingdatas'
      },
       {
        title: 'Service Identifier',
        tags: 'Service Identifier',
        routerLink: '/customer/serviceidentifiers'
      }
      

    ]
  },
  {
    title: 'Purchase Order',
    tags: 'Purchase Order',
    icon: 'fal fa-tags',
    roles: ['user', 'admin', 'super_admin'],
    items: [
      {
        title: 'Tax',
        tags: 'Tax',
        routerLink: '/purchaseorder/taxes'
      },
      {
        title: 'PO Other Charges',
        tags: 'PO Other Charges',
        routerLink: '/purchaseorder/poothercharges'
      },
      {
        title: 'Transport Mode',
        tags: 'Transport Mode',
        routerLink: '/purchaseorder/transportmodes'
      },
      {
        title: 'Quotations',
        tags: 'Quotations',
        routerLink: '/purchaseorder/quotations'
      },
      {
        title: 'Purchase Orders',
        tags: 'Purchase Orders',
        routerLink: '/purchaseorder/purchaseorders'
      },

      

    ]
  },
  {
    title: 'Article',
    tags: 'Article',
    icon: 'fal fa-futbol',
    roles: ['user', 'admin', 'super_admin'],
    items: [
      {
        title: 'Categories',
        tags: 'Categories',
        routerLink: '/article/articlecatagorys'
      },
      {
        title: 'Ranges',
        tags: 'Ranges',
        routerLink: '/article/ranges'
      },
      {
        title: 'Seasons',
        tags: 'Seasons',
        routerLink: '/article/seasons'
      },
      
      {
        title: 'Cartons',
        tags: 'Cartons',
        routerLink: '/article/cartons'
      },
      {
        title: 'Article  Library',
        tags: 'Article Library',
        routerLink: '/article/article-library'
      },
      {
        title: 'Article ME',
        tags: 'Article ME',
        routerLink: '/article/articlemes'
      },
      {
        title: 'Article Size Rates',
        tags: 'Article Size Rates',
        routerLink: '/article/articlerates'
      },
      {
        title: 'Article QC Attributes',
        tags: 'Article QC Attributes',
        routerLink: '/article/articleqcas'
      },
  
      
      

    ]
  },
  {
    title: 'Production Order',
    tags: 'Production Order',
    icon: 'fal fa-upload',
    roles: ['user', 'admin', 'super_admin'],
    items: [
      {
        title: 'Production Order',
        tags: 'PO',
        routerLink: '/productionorder/po'
      },
      {
        title: 'PO Uploading',
        tags: 'PO',
        routerLink: '/productionorder/pouploading'
      },
      
      {
        title: 'Delay Reason Code',
        tags: 'PO',
        routerLink: '/productionorder/delayreasoncodes'
      }
      

    ]
  },
  {
    title: 'FIT',
    tags: 'FIT',
    icon: 'fal fa-flask',
    roles: ['user', 'admin', 'super_admin'],
    items: [
      {
        title: 'Materials',
        tags: 'Materials',
        routerLink: '/merchandise/materials'
      },
      {
        title: 'Test Types',
        tags: 'Test',
        routerLink: '/fit/test'
      },
      
      {
        title: 'Project',
        tags: 'Project',
        routerLink: '/fit/projects'
      },

    ]
  },
    
  {
    title: 'Lab',
    tags: 'Lab',
    icon: 'fal fa-vial',
    roles: ['user', 'admin', 'super_admin'],
   
    items: [
      
      {
        title: 'Lab Ball',
        tags: 'Lab Ball',
        routerLink: '/lab/labballs'
      },
      

    ]
  },
]


