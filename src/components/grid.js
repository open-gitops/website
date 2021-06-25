import * as React from "react"
import classNames from "classnames"

const colsXs = xs => {
  return {
    "grid-cols-1": xs === 1,
    "grid-cols-2": xs === 2,
    "grid-cols-3": xs === 3,
    "grid-cols-4": xs === 4,
    "grid-cols-5": xs === 5,
    "grid-cols-6": xs === 6,
    "grid-cols-7": xs === 7,
    "grid-cols-8": xs === 8,
    "grid-cols-9": xs === 9,
    "grid-cols-10": xs === 10,
    "grid-cols-11": xs === 11,
    "grid-cols-12": xs === 12,
  }
}

const colsSm = sm => {
  return {
    "sm:grid-cols-1": sm === 1,
    "sm:grid-cols-2": sm === 2,
    "sm:grid-cols-3": sm === 3,
    "sm:grid-cols-4": sm === 4,
    "sm:grid-cols-5": sm === 5,
    "sm:grid-cols-6": sm === 6,
    "sm:grid-cols-7": sm === 7,
    "sm:grid-cols-8": sm === 8,
    "sm:grid-cols-9": sm === 9,
    "sm:grid-cols-10": sm === 10,
    "sm:grid-cols-11": sm === 11,
    "sm:grid-cols-12": sm === 12,
  }
}

const colsMd = md => {
  return {
    "md:grid-cols-1": md === 1,
    "md:grid-cols-2": md === 2,
    "md:grid-cols-3": md === 3,
    "md:grid-cols-4": md === 4,
    "md:grid-cols-5": md === 5,
    "md:grid-cols-6": md === 6,
    "md:grid-cols-7": md === 7,
    "md:grid-cols-8": md === 8,
    "md:grid-cols-9": md === 9,
    "md:grid-cols-10": md === 10,
    "md:grid-cols-11": md === 11,
    "md:grid-cols-12": md === 12,
  }
}

const colsLg = lg => {
  return {
    "lg:grid-cols-1": lg === 1,
    "lg:grid-cols-2": lg === 2,
    "lg:grid-cols-3": lg === 3,
    "lg:grid-cols-4": lg === 4,
    "lg:grid-cols-5": lg === 5,
    "lg:grid-cols-6": lg === 6,
    "lg:grid-cols-7": lg === 7,
    "lg:grid-cols-8": lg === 8,
    "lg:grid-cols-9": lg === 9,
    "lg:grid-cols-10": lg === 10,
    "lg:grid-cols-11": lg === 11,
    "lg:grid-cols-12": lg === 12,
  }
}

const colsXl = xl => {
  return {
    "xl:grid-cols-1": xl === 1,
    "xl:grid-cols-2": xl === 2,
    "xl:grid-cols-3": xl === 3,
    "xl:grid-cols-4": xl === 4,
    "xl:grid-cols-5": xl === 5,
    "xl:grid-cols-6": xl === 6,
    "xl:grid-cols-7": xl === 7,
    "xl:grid-cols-8": xl === 8,
    "xl:grid-cols-9": xl === 9,
    "xl:grid-cols-10": xl === 10,
    "xl:grid-cols-11": xl === 11,
    "xl:grid-cols-12": xl === 12,
  }
}

const colsXxl = xxl => {
  return {
    "2xl:grid-cols-1": xxl === 1,
    "2xl:grid-cols-2": xxl === 2,
    "2xl:grid-cols-3": xxl === 3,
    "2xl:grid-cols-4": xxl === 4,
    "2xl:grid-cols-5": xxl === 5,
    "2xl:grid-cols-6": xxl === 6,
    "2xl:grid-cols-7": xxl === 7,
    "2xl:grid-cols-8": xxl === 8,
    "2xl:grid-cols-9": xxl === 9,
    "2xl:grid-cols-10": xxl === 10,
    "2xl:grid-cols-11": xxl === 11,
    "2xl:grid-cols-12": xxl === 12,
  }
}

const itemsX = x => {
  return {
    "justify-start": x === "top",
    "justify-center": x === "center",
    "justify-end": x === "bottom",
  }
}

const itemsY = y => {
  return {
    "items-start": y === "top",
    "items-center": y === "center",
    "items-end": y === "bottom",
  }
}

export function Container({ className, narrow, children }) {
  const classes = classNames({
    container: true,
    "max-w-4xl": narrow,
    [className]: className,
  })

  return <div className={classes}>{children}</div>
}

export function Grid({
  xs,
  sm,
  md,
  lg,
  xl,
  xxl,
  className,
  alignX,
  alignY,
  children,
}) {
  const classes = classNames({
    "grid gap-4": true,
    ...colsXs(xs),
    ...colsSm(sm),
    ...colsMd(md),
    ...colsLg(lg),
    ...colsXl(xl),
    ...colsXxl(xxl),
    ...itemsX(alignX),
    ...itemsY(alignY),
    [className]: className,
  })

  return <div className={classes}>{children}</div>
}
