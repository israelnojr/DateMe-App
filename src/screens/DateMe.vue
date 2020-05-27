<template>
  <nb-container :style="{ backgroundColor: '#fff' }">
    <nb-header>
      <nb-left>
        <!-- <nb-button
          transparent
          :onPress="() => this.props.navigation.goBack()">
          <nb-icon name="arrow-back" />
        </nb-button> -->
      </nb-left>
      <nb-body>
        <nb-title>DateMe</nb-title>
      </nb-body>
      <nb-right>
        <nb-button
          transparent
          :onPress="() => this.props.navigation.openDrawer()">
          <nb-icon name="menu" />
        </nb-button>
       </nb-right>
    </nb-header>
    <nb-content>
      <nb-list>
        <nb-list-item
          v-for="listItem in listItemArr"
          :key="listItem.route"
          button
          :on-press="() => this.props.navigation.navigate(listItem.route)">
          <nb-left>
            <nb-text>
              {{ listItem.text }}
            </nb-text>
          </nb-left>
          <nb-right>
            <nb-icon
              name="arrow-forward"
              class="body-icon-color" />
          </nb-right>
        </nb-list-item>
      </nb-list>
       <nb-list>
        <nb-list-item
          v-for="contact in contacts"
          :key="contact.text">
          <nb-left>
            <nb-thumbnail
              square
              :size="55"
              :source="contact.img" />
          </nb-left>
          <nb-body>
            <nb-text>
              {{ contact.text }}
            </nb-text>
            <nb-text
              :number-of-lines="1" note>
              {{ contact.note }}
            </nb-text>
          </nb-body>
          <nb-right>
            <nb-button transparent
               :on-press="viewUser"
            >
              <nb-text>View</nb-text>
            </nb-button>
          </nb-right>
        </nb-list-item>
      </nb-list>
    </nb-content>
     <nb-footer>
        <nb-footer-tab>
          <nb-button
            :active="tab1"
            :on-press="toggleTab1"
            vertical
            badge>
            <nb-badge>
              <nb-text>2</nb-text>
            </nb-badge>
            <nb-icon
              name="apps"
              :active="tab1" />
            <nb-text>Trends</nb-text>
          </nb-button>

          <nb-button
            :active="tab2"
            :on-press="toggleTab2">
            <nb-icon
              name="camera"
              :active="tab2" />
            <nb-text>Share</nb-text>
          </nb-button>

          <nb-button
            :active="tab3"
            :on-press="toggleTab3"
            vertical
            badge
          >
            <nb-badge class="badge-3-bg">
              <nb-text>51</nb-text>
            </nb-badge>
            <nb-icon
              name="compass"
              :active="tab3" />
            <nb-text>Chats</nb-text>
          </nb-button>

          <nb-button
            :active="tab4"
            :on-press="toggleTab4"
          >
            <nb-icon
              name="contact"
              :active="tab4" />
            <nb-text>Contact</nb-text>
          </nb-button>
        </nb-footer-tab>
      </nb-footer>
  </nb-container>
</template>

<script>
import sankhadeep from '../../assets/contacts/sankhadeep.png'
import supriya from '../../assets/contacts/supriya.png'
import himanshu from '../../assets/contacts/himanshu.png'
import shweta from '../../assets/contacts/shweta.png'
import shruti from '../../assets/contacts/shruti.png'
import shivraj from '../../assets/contacts/shivraj.jpg'
import { mapGetters } from 'vuex'
export default {
  props: {
    navigation: {
      type: Object
    }
  },

  // name: "contacts",
  // computed: mapGetters(['allContacts']),
  data: function () {
    return {
      tab1: true,
      tab2: false,
      tab3: false,
      tab4: false,
      listItemArr: [
        {
          route: 'BasicListSwipe',
          text: 'Nearby Friend'
        },
        {
          route: 'SwipeRowCustomStyle',
          text: 'Find Singles'
        },
        {
          route: 'MultiListSwipe',
          text: 'Explore'
        }
      ],
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
    }
  },
  methods: {
    toggleTab1: function () {
      this.tab1 = true
      this.tab2 = false
      this.tab3 = false
      this.tab4 = false
    },
    toggleTab2: function () {
      this.tab1 = false
      this.tab2 = true
      this.tab3 = false
      this.tab4 = false
    },
    toggleTab3: function () {
      this.tab1 = false
      this.tab2 = false
      this.tab3 = true
      this.tab4 = false
    },
    toggleTab4: function () {
      this.tab1 = false
      this.tab2 = false
      this.tab3 = false
      this.tab4 = true
    },
    viewUser(){

    }
  }
}
</script>

<style>
.badge-3-bg {
  background-color: green;
}
</style>