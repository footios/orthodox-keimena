import Category from '../models/category';
import Text from '../models/Text';
import Colors from '../constants/Colors';

export const CATEGORIES = [
    new Category('c1', 'Βιβλικά', '#FFFACD'), // lemonchiffon
    new Category('c2', 'Δογματική', '#40E0D0'), // turquoise
    new Category('c3', 'Πατερικά', '#00BFFF'), // deepskyblue
    new Category('c4', 'Αγιολογικά', '#F5DEB3'), // wheat
    new Category('c5', 'Ασκητικά', '#F4A460'), // sandybrown
    new Category('c6', 'Εκκλησιαστική Ιστορία', '#FF7F50'), // coral
    new Category('c7', 'Λειτουργικά', '#808000'), // olive
    new Category('c8', 'Ιεροί Κανόνες', '#F0E68C'), // khaki
    new Category('c9', 'Θρησκειολογικά', '#D3D3D3'), // lightgray
    new Category('c10', 'Ξενόγλωσσα', '#CD5C5C'), // indianred
    new Category('c11', 'Περιοδικά', '#BDB76B'), // darkkhaki
    new Category('c12', 'Λεξικά', '#F5F5DC'), // beige

]

export const TEXTS = [
    new Text({
        id: 't1',
        categoryIds: ['c1'],
        color: Colors.lightyellow,
        title: 'Καινή Διαθήκη',
        // image: require('../assets/images/matheon.jpg'),
        holly: true,
        scholarly: false
    }),
    new Text({
        id: 't2',
        categoryIds: ['c1'],
        title: 'Ψαλτήριον',
        color: Colors.moccasin,
        // image: require('../assets/images/psaltirion.jpg'),
        holly: true,
        scholarly: false
    })
]