import { useCallback } from 'react'
import IntensityBar from './IntensityBar/IntensityBar'
import { useFetchData } from '../../../../hooks/useFetchData'
import './IntensityBarDirectory.scss'
const baseURL = process.env.REACT_APP_BASE_URL
const FIN_PREP_API_KEY = process.env.REACT_APP_FIN_PREP_API_KEY

const IntensityBarDirectory = ({ companySymbol }) => {
  const url = `${baseURL}/financial-growth/${companySymbol}?period=quarter&limit=8&apikey=${FIN_PREP_API_KEY}`

  const formatData = useCallback((data) => {
    const lastEightQuarters = data
    return lastEightQuarters.map(({ date, period, revenueGrowth, ebitgrowth }) => ({
      date,
      period,
      revenueGrowth: (revenueGrowth * 100).toFixed(2),
      ebitgrowth: (ebitgrowth * 100).toFixed(2),
      formattedDate: `${period}'${date.split('-')[0].substring(2, 4)}`,
    }))
  }, [])

  let data = useFetchData(url, companySymbol, formatData)
  data = data.reverse() //so that time is going left to right

  return (
    <div className="intensity-bars">
      <IntensityBar
        key="revenueGrowth"
        company={companySymbol}
        indicator="revenueGrowth"
        title="Q/Q Revenue Growth"
        chartData={data}
      />
      <IntensityBar
        key="ebitgrowth"
        company={companySymbol}
        indicator="ebitgrowth"
        title="Q/Q EBIT Growth"
        chartData={data}
      />
    </div>
  )
}

export default IntensityBarDirectory
