import React, { useState, useEffect } from 'react'
import { useHistory, withRouter, useParams } from 'react-router-dom'
import { Button } from 'antd-mobile'
import styles from './index.module.less'
import Container from '@/components/container'

// 以下为按需引入饼状图示例-----start---
import { Chart } from '@antv/f2/lib/core'
import Axis from '@antv/f2/lib/coord/polar'
import Animation from '@antv/f2/lib/animation/detail'
import Legend from '@antv/f2/lib/plugin/legend'
import Tooltip from '@antv/f2/lib/plugin/tooltip'
import interval from '@antv/f2/lib/geom/interval'
import adjust from '@antv/f2/lib/geom/adjust/stack'

// 给 chart 的实例注册方法
Chart.plugins.register(Animation)
Chart.plugins.register(Axis)
Chart.plugins.register(Legend)
Chart.plugins.register(Tooltip)
Chart.plugins.register(interval)
Chart.plugins.register(adjust)
// ------  end -----

type mapTypes = {
  [key:string]:string
}

export interface IAppProps {
  [key:string]:any
}

const map:mapTypes = {
  芳华: '40%',
  妖猫传: '20%',
  机器之血: '18%',
  心理罪: '15%',
  寻梦环游记: '5%',
  其他: '2%',
}
const data = [{
  name: '芳华',
  percent: 0.4,
  a: '1',
}, {
  name: '妖猫传',
  percent: 0.2,
  a: '1',
}, {
  name: '机器之血',
  percent: 0.18,
  a: '1',
}, {
  name: '心理罪',
  percent: 0.15,
  a: '1',
}, {
  name: '寻梦环游记',
  percent: 0.05,
  a: '1',
}, {
  name: '其他',
  percent: 0.02,
  a: '1',
}]

const Home = (props:IAppProps): JSX.Element => {
  const [count, setCount] = useState(0)
  const history = useHistory()
  const params = useParams()
  console.log('useParams===', params)
  const P = new Promise((resolve) => {
    resolve(count)
  })
  console.log('props===', props)
  const handleChart = () => {
    const chart = new Chart({
      id: 'myChart',
      pixelRatio: window.devicePixelRatio,
    })

    chart.source(data, {
      percent: {
        formatter: function formatter (val:number) {
          return `${val * 100}%`
        },
      },
    })
    chart.legend({
      position: 'right',
      itemFormatter: function itemFormatter (val:number) {
        return `${val}  ${map[val]}`
      },
    })
    chart.tooltip(false)
    chart.coord('polar', {
      transposed: true,
      radius: 0.85,
    })
    chart.axis(false)
    chart.interval()
      .position('a*percent')
      .color('name', ['#1890FF', '#13C2C2', '#2FC25B', '#FACC14', '#F04864', '#8543E0'])
      .adjust('stack')
      .style({
        lineWidth: 1,
        stroke: '#fff',
        lineJoin: 'round',
        lineCap: 'round',
      })
      .animate({
        appear: {
          duration: 1200,
          easing: 'bounceOut',
        },
      })

    chart.render()
  }

  useEffect(() => {
    handleChart()
  }, [])

  return (
    <Container>
      <div className="App">
        <div className={styles['App-header']}>我是首页 11</div>

        <p className={styles['test-p']}>{Array.isArray(P) ? '是' : '否'}</p>
        <p>
          <Button type="primary" size="small" inline onClick={() => setCount(count => count + 1)}> count is: {count}</Button>
        </p>

        <canvas id="myChart" width="300" height="260" />
        <Button type="warning" size="large" onClick={() => { history.push('/test') }}>跳转页面</Button>
      </div>
    </Container>
  )
}

export default withRouter(Home)
