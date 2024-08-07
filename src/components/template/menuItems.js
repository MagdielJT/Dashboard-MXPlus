
const menuItems = () => {
    const data = [

        {
            id: 0,
            title: 'Manuales',
            path: '#/',
            icon: 'fa-solid fa-book-bookmark',
            hasChildren: false,
            
        },
        {
            id: 1,
            title: 'Portal de Proveedores',
            path: '#/portal-proveedores',
            icon: 'fa-solid fa-truck-fast',
            hasChildren: false
        }

        

    ];
    return data;
}
export default menuItems;