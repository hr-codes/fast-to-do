<template>
  <div
    class="bg-white py-2 px-4 ms-auto d-flex align-items-center small fixed-bottom w-100"
  >
    <h6 class="mb-0 fw-bold">Legenda</h6>

    <div class="d-flex align-items-center">
      <div
        class="priority me-1 ms-5 rounded-circle mb-0 bg-purple"
      />
      Urgente
    </div>

    <div class="d-flex align-items-center">
      <div
        class="priority me-1 ms-4 rounded-circle mb-0 bg-orange"
      />
      Alta
    </div>

    <div class="d-flex align-items-center">
      <div
        class="priority me-1 ms-4 rounded-circle mb-0 bg-warning"
      />
      Média
    </div>

    <div class="d-flex align-items-center">
      <div
        class="priority me-1 ms-4 rounded-circle mb-0 bg-info"
      />
      Baixa
    </div>

    <button
      class="ms-auto btn btn-sm custom-buttons history"
    >
      Histórico
    </button>

    <button
      class="ms-3 btn btn-sm custom-buttons completed"
    >
      Concluidos
    </button>
  </div>
</template>

<style lang="scss">
  .custom-buttons {
    position: relative;
    padding: 14px 15px !important;
    border-radius: 4px !important;
    margin-top: -35px;
    color: #fff !important;
    font-weight: bold !important;
    font-size: 1rem !important;
    transition: all 200ms linear;

    &:hover {
      position: relative;
      margin-top: -45px;
      transition: all 200ms linear;
    }
  }

  .completed {
    border: 0 !important;
    background: rgb(26, 124, 23);
    background: linear-gradient(0deg, rgb(26, 124, 23) 0%, rgb(123, 233, 95) 100%);

    border-bottom: 4px solid rgb(13, 82, 10) !important;
  }

  .history {
    border: 0 !important;
    background: rgb(76, 68, 216);
    background: linear-gradient(0deg, rgb(76, 68, 216) 0%, rgba(0,212,255,1) 100%);

    border-bottom: 4px solid rgb(20, 16, 94)!important;
  }
</style>
