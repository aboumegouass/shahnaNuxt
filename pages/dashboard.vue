<template>
  <div class="container">
    <div class="page-heading">
      <h5 class="title"><i class="fa fa-home"></i> الرئيسية</h5>
    </div>
    <div class="row">
      <div class="col-md-6">
        <div class="panel-colored primary2-light">
          <div class="panel-content">
            <h4 class="title">الشكاوي والاعتراضات</h4>
            <p class="meta">عدد الرسائل: 300 | عدد الشكاوي: 15</p>
            <div class="icon-bg">
              <i class="far fa-envelope"></i>
            </div>
          </div>
        </div>
      </div>
      <div class="col-md-6">
        <div class="panel-colored white">
          <div class="panel-content">
            <h4 class="title">الأعضاء</h4>
            <p class="meta">عدد الرسائل: 300 | عدد الشكاوي: 15</p>
            <div class="icon-bg">
              <i class="far fa-user"></i>
            </div>
          </div>
        </div>
      </div>
      <div class="col-md-6">
        <div class="panel-colored white">
          <div class="panel-content">
            <h4 class="title">الطلبات</h4>
            <p class="meta">طلبات النقل : 300 | اجمالي: 15 | الطلبات الجاهزة: 600</p>
            <div class="icon-bg">
              <i class="fa fa-shopping-bag"></i>
            </div>
          </div>
        </div>
      </div>
      <div class="col-md-6">
        <div class="panel-colored">
          <div class="panel-content">
            <h4 class="title">الشكاوي والاعتراضات</h4>
            <p class="meta">عدد الرسائل: 300 | عدد الشكاوي: 15</p>
            <div class="icon-bg">
              <i class="far fa-envelope"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-md-6">
        <div class="site-panel">
          <div class="site-panel-header">
            <h2 class="title"><i class="fa fa-chart-bar"></i> احصائيات الطلبات</h2>
          </div>
          <div class="site-panel-content">
            <div class="panel-bars-chart">
              <!-- <bar-chart :data="barChartData" :height="300" :options="barChartOptions" /> -->

            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
//import VGrid from "@revolist/vue-datagrid";

export default {
  layout: 'withSidebar',
  head: {
    title: "لوحة التحكم",
  },
  middleware: "auth",
  data() {
    return {
      columns: [{ prop: "name" }, { prop: "details" }],
      rows: [{
        name: "1",
        details: "Item 1",
      }],
      barChartData: {
        labels: [
          '2019-06',
          '2019-07',
          '2020-03',
          '2020-04',
          '2020-05'
        ],
        datasets: [
          {
            label: 'الزوار',
            data: [10, 15, 20, 30, 40, 50, 60],
            backgroundColor: '#003f5c'
          },
          {
            label: 'صفحات',
            data: [30, 24, 57, 23, 68, 72, 25],
            backgroundColor: '#2f4b7c'
          },
          {
            label: 'مستخدمين',
            data: [45, 65, 30, 53, 34, 35, 26],
            backgroundColor: '#665191'
          }
        ]
      },
      barChartOptions: {
        responsive: true,
        legend: {
          display: false
        },
        title: {
          display: false,
        },
        tooltips: {
          backgroundColor: '#17BF62'
        },
        scales: {
          xAxes: [
            {
              gridLines: {
                display: true
              }
            }
          ],
          yAxes: [
            {
              ticks: {
                beginAtZero: true
              },
              gridLines: {
                display: false
              }
            }
          ]
        }
      }
    }
  },
}
</script>