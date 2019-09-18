const icon = iconName => ({
    src: require(`./images/${iconName}.png`),
    srcset: require(`./images/${iconName}@2x.png`)
})

module.exports = function (data, options) {
    this.cards = [
        {
            ...icon('fineicon'),
            title: 'Штрафы ГИБДД',
            description: 'sometext1',
            id: 'collapse1'
        },
        {
            ...icon('dutyicon'),
            title: 'Пошлины ГИБДД',
            description: 'sometext2',
            id: 'collapse2'
        },
        {
            ...icon('judgeicon'),
            title: 'Судебные задолженности',
            description: 'sometext3',
            id: 'collapse3'
        },
        {
            ...icon('taxicon'),
            title: 'Налоги',
            description: 'sometext4',
            id: 'collapse4'
        },
        {
            ...icon('reestricon'),
            title: 'Штрафы ГИБДД',
            description: 'sometext5',
            id: 'collapse5'
        },
    ]

    this.logos = [
        {
            partner: 'partner one',
            ...icon('partnerone')
        },
        {
            partner: 'partner two with long name',
            ...icon('partnertwo')
        },
        {
            partner: 'partner two with long name',
            ...icon('partnerthree')
        },
        {
            partner: 'partner four',
            ...icon('partnerfour')
        },
        {
            partner: 'partner five',
            ...icon('partnerfive')
        },
        {
            partner: 'partner six with long name',
            ...icon('partnersix')
        }
    ]
};
