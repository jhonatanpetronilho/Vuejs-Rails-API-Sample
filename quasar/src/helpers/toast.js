import {Toast} from 'quasar'

export const toast = (html, icon, status = 'success') => {
  let bgColor = 'rgb(77, 222, 117)'
  if (status !== 'success') {
    if (status === 'error') {
      bgColor = 'rgb(251, 31, 31)'
    }
  }

  Toast.create({
    html: html,
    icon: icon,
    timeout: 3000,
    color: 'rgb(255, 255, 255)',
    bgColor: bgColor
  })
}
