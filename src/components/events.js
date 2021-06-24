import * as React from "react"
import { Grid } from "./grid"
import CardEvent from "./card-event"
import CardEventAlt from "./card-event-alt"

const Events = () => {
  const date = new Date()

  return (
    <React.Fragment>
      <section className="py-32">
        <h2>
          Upcomings <span className="text-primary">Events</span>
        </h2>
        <p>Today, {date.toDateString()}</p>

        <div className="mt-12 max-w-4xl space-y-7">
          <CardEvent
            date={date.toDateString()}
            title="Online Meeting with Dev Team"
            location="Room 6A, 2nd floor, 520 Boardway"
            url="/"
          />
          <CardEvent
            date={date.toDateString()}
            title="Online Meeting with Dev Team"
            location="Room 6A, 2nd floor, 520 Boardway"
            url="/"
          />
        </div>
      </section>

      <section className="pb-20">
        <h2 className="text-3xl">
          Past <span className="text-primary">Events</span>
        </h2>

        <Grid lg={2} xxl={3} className="py-6">
          <CardEventAlt
            date={date.toDateString()}
            title="Online Meeting with Dev Team"
            location="Room 6A, 2nd floor, 520 Boardway"
            url="/"
          />
          <CardEventAlt
            date={date.toDateString()}
            title="Online Meeting with Dev Team"
            location="Room 6A, 2nd floor, 520 Boardway"
            url="/"
          />
          <CardEventAlt
            date={date.toDateString()}
            title="Online Meeting with Dev Team"
            location="Room 6A, 2nd floor, 520 Boardway"
            url="/"
          />
          <CardEventAlt
            date={date.toDateString()}
            title="Online Meeting with Dev Team"
            location="Room 6A, 2nd floor, 520 Boardway"
            url="/"
          />
        </Grid>
      </section>
    </React.Fragment>
  )
}

export default Events
