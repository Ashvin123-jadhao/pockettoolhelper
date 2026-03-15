interface Props {
    title: string
    value: number
}

export default function StatsCard({ title, value }: Props) {

    return (

        <div className="stat-card">

      <span className="stat-title">
        {title}
      </span>

            <span className="stat-value">
        {value}
      </span>

        </div>

    )

}