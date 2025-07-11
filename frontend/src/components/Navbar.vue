<script setup>
import { ref } from 'vue';

const isMobileMenuOpen = ref(false);

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value;
};
</script>

<template>
  <header class="bg-white shadow-md sticky top-0 z-50 animate-fade-in">
    <nav class="container mx-auto px-6 py-4 flex justify-between items-center">
      <div class="text-2xl font-bold text-gray-800">Hibatulhaqqi Q.R</div>

      <ul class="hidden md:flex space-x-6">
        <li><a href="#profil" class="text-gray-600 hover:text-blue-500 transform hover:-translate-y-0.5 transition-all duration-300">Profil</a></li>
        <li><a href="#pendidikan" class="text-gray-600 hover:text-blue-500 transform hover:-translate-y-0.5 transition-all duration-300">Pendidikan</a></li>
        <li><a href="#skill" class="text-gray-600 hover:text-blue-500 transform hover:-translate-y-0.5 transition-all duration-300">Skill</a></li>
        <li><a href="#proyek" class="text-gray-600 hover:text-blue-500 transform hover:-translate-y-0.5 transition-all duration-300">Proyek</a></li>
        <li><a href="#kontak" class="text-gray-600 hover:text-blue-500 transform hover:-translate-y-0.5 transition-all duration-300">Kontak</a></li>
      </ul>

      <div class="md:hidden flex items-center">
        <button @click="toggleMobileMenu" class="text-gray-800 focus:outline-none hamburger-button">
          <div :class="['hamburger-line', { 'open': isMobileMenuOpen }]"></div>
          <div :class="['hamburger-line', { 'open': isMobileMenuOpen }]"></div>
          <div :class="['hamburger-line', { 'open': isMobileMenuOpen }]"></div>
        </button>
      </div>
    </nav>

    <div v-if="isMobileMenuOpen" class="md:hidden fixed inset-0 bg-white bg-opacity-95 z-40 mobile-menu-overlay">
      <div class="flex justify-end p-6">
        <button @click="toggleMobileMenu" class="text-gray-800 focus:outline-none hamburger-button">
          <div :class="['hamburger-line', { 'open': isMobileMenuOpen }]"></div>
          <div :class="['hamburger-line', { 'open': isMobileMenuOpen }]"></div>
          <div :class="['hamburger-line', { 'open': isMobileMenuOpen }]"></div>
        </button>
      </div>
      <ul class="flex flex-col items-center space-y-6 py-8">
        <li><a href="#profil" @click="toggleMobileMenu" class="text-gray-800 text-xl hover:text-blue-500 transition-colors duration-300">Profil</a></li>
        <li><a href="#pendidikan" @click="toggleMobileMenu" class="text-gray-800 text-xl hover:text-blue-500 transition-colors duration-300">Pendidikan</a></li>
        <li><a href="#skill" @click="toggleMobileMenu" class="text-gray-800 text-xl hover:text-blue-500 transition-colors duration-300">Skill</a></li>
        <li><a href="#proyek" @click="toggleMobileMenu" class="text-gray-800 text-xl hover:text-blue-500 transition-colors duration-300">Proyek</a></li>
        <li><a href="#kontak" @click="toggleMobileMenu" class="text-gray-800 text-xl hover:text-blue-500 transition-colors duration-300">Kontak</a></li>
      </ul>
    </div>
  </header>
</template>

<style scoped>
/* Animasi Fade In untuk Header */
.animate-fade-in {
  animation: fadeIn 1s ease-out;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(-20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Hamburger Icon Styles */
.hamburger-button {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 30px;
  height: 25px;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 100; /* Pastikan tombol hamburger di atas overlay */
}

.hamburger-line {
  width: 100%;
  height: 3px;
  background-color: #333;
  transition: all 0.3s ease-in-out;
}

.hamburger-line:nth-child(1).open {
  transform: translateY(11px) rotate(45deg);
}

.hamburger-line:nth-child(2).open {
  opacity: 0;
}

.hamburger-line:nth-child(3).open {
  transform: translateY(-11px) rotate(-45deg);
}

/* Mobile Menu Overlay Animation */
.mobile-menu-overlay {
  animation: slideIn 0.3s ease-out forwards;
}

.mobile-menu-overlay.closed { /* Optional: For explicit close animation if needed */
  animation: slideOut 0.3s ease-in forwards;
}

@keyframes slideIn {
  from {
    transform: translateX(100%);
  }
  to {
    transform: translateX(0);
  }
}

@keyframes slideOut {
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(100%);
  }
}

/* Penyesuaian untuk ukuran layar kecil */
@media (max-width: 768px) {
  .md\:hidden {
    display: flex;
  }
  .hidden {
    display: none;
  }
}
</style>
