<template>
  <div class="min-h-screen bg-gray-50">
    <!-- Barra de navegação superior com design melhorada -->
    <nav class="bg-blue-600 shadow-lg text-white">
      <div class="max-w-7xl mx-auto px-4">
        <div class="flex justify-between h-16">
          <div class="flex items-center">
            <div class="flex-shrink-0 flex items-center space-x-2">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24"
                stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
              <h1 class="text-xl font-bold">Oficina Mecânica</h1>
            </div>
          </div>
          <!-- Botão de Instalação PWA -->
          <div class="flex items-center">
            <button @click="instalarApp"
              class="bg-green-500 hover:bg-green-600 text-white font-semibold py-1.5 px-4 rounded-lg flex items-center space-x-2 transition duration-150 ease-in-out shadow-md hover:shadow-lg text-sm">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
              <span>Instalar App</span>
            </button>
          </div>
        </div>
      </div>
    </nav>

    <div class="py-8">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <!-- Card principal com sombra e cantos arredondados -->
        <div class="bg-white shadow-md rounded-lg overflow-hidden">
          <!-- Tabs de navegação com design melhorado -->
          <div class="flex border-b border-gray-200 bg-gray-50 flex-wrap">
            <button class="px-6 py-4 text-sm font-medium flex items-center space-x-2 focus:outline-none"
              :class="{ 'text-blue-600 border-b-2 border-blue-600': activeTab === 'dashboard', 'text-gray-500 hover:text-gray-700': activeTab !== 'dashboard' }"
              @click="mudarTab('dashboard')">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24"
                stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M3 12l2-2m0 0l7-7 7 7m-7-7v14" />
              </svg>
              <span>Dashboard</span>
            </button>
            <button class="px-6 py-4 text-sm font-medium flex items-center space-x-2 focus:outline-none"
              :class="{ 'text-blue-600 border-b-2 border-blue-600': activeTab === 'clientes', 'text-gray-500 hover:text-gray-700': activeTab !== 'clientes' }"
              @click="mudarTab('clientes')">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24"
                stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
              <span>Clientes</span>
            </button>
            <button class="px-6 py-4 text-sm font-medium flex items-center space-x-2 focus:outline-none"
              :class="{ 'text-blue-600 border-b-2 border-blue-600': activeTab === 'veiculos', 'text-gray-500 hover:text-gray-700': activeTab !== 'veiculos' }"
              @click="mudarTab('veiculos')">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24"
                stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
              </svg>
              <span>Veículos</span>
            </button>
            <button class="px-6 py-4 text-sm font-medium flex items-center space-x-2 focus:outline-none"
              :class="{ 'text-blue-600 border-b-2 border-blue-600': activeTab === 'servicos', 'text-gray-500 hover:text-gray-700': activeTab !== 'servicos' }"
              @click="mudarTab('servicos')">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24"
                stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M19 21v-2a4 4 0 00-4-4H9a4 4 0 00-4 4v2m18-7a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>Serviços</span>
            </button>
            <button class="px-6 py-4 text-sm font-medium flex items-center space-x-2 focus:outline-none"
              :class="{ 'text-blue-600 border-b-2 border-blue-600': activeTab === 'pecas', 'text-gray-500 hover:text-gray-700': activeTab !== 'pecas' }"
              @click="mudarTab('pecas')">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24"
                stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
              </svg>
              <span>Peças</span>
            </button>
            <button class="px-6 py-4 text-sm font-medium flex items-center space-x-2 focus:outline-none"
              :class="{ 'text-blue-600 border-b-2 border-blue-600': activeTab === 'ordens', 'text-gray-500 hover:text-gray-700': activeTab !== 'ordens' }"
              @click="mudarTab('ordens')">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24"
                stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
              </svg>
              <span>Ordens de Serviço</span>
            </button>


          </div>

          <!-- Conteúdo principal -->
          <div class="p-6">
            <!-- Componentes com transição suave -->
            <transition name="fade" mode="out-in">
              <component :is="componenteAtivo" @selecionar-cliente="selecionarCliente"
                @selecionar-veiculo="selecionarVeiculo" @mudar-tab="mudarTab" />
            </transition>
          </div>
        </div>
      </div>
    </div>
    <!-- Modal de Ajuda para Instalação -->
    <div v-if="showHelpModal" class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-50">
      <div class="bg-white rounded-lg max-w-md w-full p-6 shadow-2xl relative text-gray-800">
        <button @click="showHelpModal = false" class="absolute top-4 right-4 text-gray-400 hover:text-gray-600">
          <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        <h3 class="text-lg font-bold text-gray-900 mb-4 flex items-center space-x-2">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <span>Instalação do Aplicativo</span>
        </h3>
        <div class="space-y-4 text-sm text-gray-600">
          <p>O aplicativo pode ser instalado no seu computador ou celular para funcionar offline e com acesso rápido.</p>
          
          <div class="border-t border-gray-100 pt-3">
            <h4 class="font-semibold text-gray-800 mb-1">Computador / Android (Chrome ou Edge)</h4>
            <p>Aguarde alguns segundos para o navegador carregar a instalação. Se o prompt automático não abrir, procure pelo ícone de instalação <span class="font-semibold text-blue-600">⊕</span> na barra de endereços do seu navegador.</p>
          </div>

          <div class="border-t border-gray-100 pt-3">
            <h4 class="font-semibold text-gray-800 mb-1">iPhone / iPad (Safari)</h4>
            <p>1. Toque no botão de <strong>Compartilhar</strong> (ícone de quadrado com seta para cima).</p>
            <p>2. Selecione a opção <strong>"Adicionar à Tela de Início"</strong>.</p>
          </div>
        </div>
        <div class="mt-6 flex justify-end">
          <button @click="showHelpModal = false" class="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg text-sm transition duration-150">
            Fechar
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, computed, onUnmounted } from 'vue';
import { db } from './services/db';
import type { Veiculo, Cliente } from './services/db';
import ClientesList from './components/ClientesList.vue';
import VeiculosList from './components/VeiculosList.vue';
import ServicosList from './components/ServicosList.vue';
import OrdemServicoList from './components/OrdemServicoList.vue';
import PecasList from './components/PecasList.vue';
import Dashboard from './components/Dashboard.vue';

type TabType = 'dashboard' | 'clientes' | 'veiculos' | 'servicos' | 'ordens' | 'pecas';

const activeTab = ref<TabType>('dashboard');
const clienteSelecionado = ref<Cliente | null>(null);
const veiculoSelecionado = ref<Veiculo | null>(null);

// Mapeamento de componentes
const componentesMap = {
  dashboard: Dashboard,
  clientes: ClientesList,
  veiculos: VeiculosList,
  servicos: ServicosList,
  ordens: OrdemServicoList,
  pecas: PecasList
};

// Componente ativo computado
const componenteAtivo = computed(() => {
  return componentesMap[activeTab.value] || Dashboard;
});

const mudarTab = (tab: TabType | string) => {
  console.log('Mudando para a tab:', tab);
  // Garantir que o tipo de tab seja válido antes de atribuir
  if (tab === 'dashboard' || tab === 'clientes' || tab === 'veiculos' ||
    tab === 'servicos' || tab === 'ordens' || tab === 'pecas') {
    activeTab.value = tab as TabType;
  } else {
    console.error('Tipo de tab inválido:', tab);
  }
};

const selecionarCliente = (cliente: Cliente) => {
  clienteSelecionado.value = cliente;
  activeTab.value = 'veiculos';
};

const selecionarVeiculo = (veiculo: Veiculo) => {
  veiculoSelecionado.value = veiculo;
  activeTab.value = 'ordens';
};

// Gerenciamento de instalação PWA
const deferredPrompt = ref<any | null>(null);
const showInstallBtn = ref(false);
const showHelpModal = ref(false);

const handleBeforeInstallPrompt = (e: Event) => {
  e.preventDefault();
  deferredPrompt.value = e;
  showInstallBtn.value = true;
};

const handleAppInstalled = () => {
  deferredPrompt.value = null;
  showInstallBtn.value = false;
  console.log('Aplicativo instalado com sucesso!');
};

const instalarApp = async () => {
  if (!deferredPrompt.value) {
    showHelpModal.value = true;
    return;
  }
  deferredPrompt.value.prompt();
  const { outcome } = await deferredPrompt.value.userChoice;
  console.log(`Resposta do usuário para a instalação: ${outcome}`);
  if (outcome === 'accepted') {
    deferredPrompt.value = null;
    showInstallBtn.value = false;
  }
};

onMounted(async () => {
  window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
  window.addEventListener('appinstalled', handleAppInstalled);

  try {
    // Apenas inicializa o banco de dados
    await db.init();
    console.log('Banco de dados inicializado com sucesso');
  } catch (error) {
    console.error('Erro ao inicializar banco de dados:', error);
  }
});

onUnmounted(() => {
  window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
  window.removeEventListener('appinstalled', handleAppInstalled);
});
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
