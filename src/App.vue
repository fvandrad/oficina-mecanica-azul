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
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, computed } from 'vue';
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

onMounted(async () => {
  try {
    // Apenas inicializa o banco de dados
    await db.init();
    console.log('Banco de dados inicializado com sucesso');
  } catch (error) {
    console.error('Erro ao inicializar banco de dados:', error);
  }
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
