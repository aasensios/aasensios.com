const stickyClasses = ['fixed', 'h-14']
const unStickyClasses = ['absolute', 'h-20']
const stickyClassesContainer = [
  'border-neutral-300/50',
  'bg-white/80',
  'dark:border-neutral-600/40',
  'dark:bg-neutral-900/60',
  'backdrop-blur-2xl',
]
const unStickyClassesContainer = ['border-transparent']
let headerElement = null

document.addEventListener('DOMContentLoaded', () => {
  headerElement = document.getElementById('header')

  stickyHeaderFunctionality()
  applyMenuItemClasses()
  evaluateHeaderPosition()
  mobileMenuFunctionality()
})

const stickyHeaderFunctionality = () => {
  window.addEventListener('scroll', () => {
    evaluateHeaderPosition()
  })
}

const evaluateHeaderPosition = () => {
  if (window.scrollY > 16) {
    headerElement.firstElementChild.classList.add(...stickyClassesContainer)
    headerElement.firstElementChild.classList.remove(
      ...unStickyClassesContainer
    )
    headerElement.classList.add(...stickyClasses)
    headerElement.classList.remove(...unStickyClasses)
    document.getElementById('menu').classList.add('top-[56px]')
    document.getElementById('menu').classList.remove('top-[75px]')
  } else {
    headerElement.firstElementChild.classList.remove(...stickyClassesContainer)
    headerElement.firstElementChild.classList.add(...unStickyClassesContainer)
    headerElement.classList.add(...unStickyClasses)
    headerElement.classList.remove(...stickyClasses)
    document.getElementById('menu').classList.remove('top-[56px]')
    document.getElementById('menu').classList.add('top-[75px]')
  }
}

const applyMenuItemClasses = () => {
  const menuItems = document.querySelectorAll('#menu a')
  for (let i = 0; i < menuItems.length; i++) {
    if (menuItems[i].pathname === window.location.pathname) {
      menuItems[i].classList.add('text-neutral-900', 'dark:text-white')
    }
  }
}

function mobileMenuFunctionality() {
  document.getElementById('openMenu').addEventListener('click', () => {
    openMobileMenu()
  })

  document.getElementById('closeMenu').addEventListener('click', () => {
    closeMobileMenu()
  })
}

const openMobileMenu = () => {
  document.getElementById('openMenu').classList.add('hidden')
  document.getElementById('closeMenu').classList.remove('hidden')
  document.getElementById('menu').classList.remove('hidden')
  document.getElementById('mobileMenuBackground').classList.add('opacity-0')
  document.getElementById('mobileMenuBackground').classList.remove('hidden')

  setTimeout(() => {
    document
      .getElementById('mobileMenuBackground')
      .classList.remove('opacity-0')
  }, 1)
}

const closeMobileMenu = () => {
  document.getElementById('closeMenu').classList.add('hidden')
  document.getElementById('openMenu').classList.remove('hidden')
  document.getElementById('menu').classList.add('hidden')
  document.getElementById('mobileMenuBackground').classList.add('hidden')
}
