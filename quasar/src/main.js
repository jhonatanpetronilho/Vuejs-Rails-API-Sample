import Vue from 'vue'
import Quasar, {
  QLayout,
  QBtn,
  QFab,
  QFabAction,
  QFixedPosition,
  QIcon,
  QToolbar,
  QToolbarTitle,
  QInput,
  QField,
  QCard,
  QCardTitle,
  QCardSeparator,
  QCardMain,
  QCardActions,
  QList,
  QListHeader,
  QSideLink,
  QItem,
  QItemSide,
  QItemTile,
  QItemMain,
  QToggle,
  QTransition,
  QTooltip,
  QTabs,
  QRouteTab,
  QParallax
} from 'quasar'
import router from './router'
import store from './store'
import 'quasar-extras/material-icons'

require(`quasar/dist/quasar.${__THEME}.css`)

if (__THEME === 'mat') {
  require('quasar-extras/roboto-font')
}

Vue.config.productionTip = false
Vue.use(Quasar, {
  components: {
    QLayout,
    QBtn,
    QFab,
    QFabAction,
    QFixedPosition,
    QIcon,
    QToolbar,
    QToolbarTitle,
    QInput,
    QField,
    QCard,
    QCardTitle,
    QCardSeparator,
    QCardMain,
    QCardActions,
    QList,
    QListHeader,
    QSideLink,
    QItem,
    QItemSide,
    QItemTile,
    QItemMain,
    QToggle,
    QTransition,
    QTooltip,
    QTabs,
    QRouteTab,
    QParallax
  }
}) // Install Quasar Framework

// Verify auth before router
router.beforeEach((to, from, next) => {
  if (!localStorage.token && to.path !== '/') {
    next({name: 'login'})
    delete localStorage.user
  } else {
    next()
  }
})

Quasar.start(() => {
  /* eslint-disable no-new */
  new Vue({
    el: '#q-app',
    router,
    store,
    render: h => h(require('./App').default)
  })
})
