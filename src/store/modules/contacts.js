import sankhadeep from '../../../assets/contacts/sankhadeep.png'
import supriya from '../../../assets/contacts/supriya.png'
import himanshu from '../../../assets/contacts/himanshu.png'
import shweta from '../../../assets/contacts/shweta.png'
import shruti from '../../../assets/contacts/shruti.png'
import shivraj from '../../../assets/contacts/shivraj.jpg'
const state = {
    contacts: [
        {
          img: sankhadeep,
          text: 'Sankhadeep',
          note: 'Its time to build a difference . .'
        },
        {
          img: supriya,
          text: 'Supriya',
          note: 'One needs courage to be happy and smiling all time . . '
        },
        {
          img: shivraj,
          text: 'Shivraj',
          note: 'Time changes everything . .'
        },
        {
          img: shruti,
          text: 'Shruti',
          note: 'The biggest risk is a missed opportunity !!'
        },
        {
          img: himanshu,
          text: 'Himanshu',
          note: 'Live a life style that matchs your vision'
        },
        {
          img: shweta,
          text: 'Shweta',
          note: 'Failure is temporary, giving up makes it permanent'
        }
    ]
};

const getters = {
    allContacts: (state) => state.contacts.array()
};

const actions = {};

const mutations = {};

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
};