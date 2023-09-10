export class SI_Leader {
  constructor(
    name,
    course,
    days,
    time,
    location,
    zoom = "null",
    discord = "null"
  ) {
    this.name = name;
    this.course = course;
    this.days = days;
    this.time = time;
    this.location = location;
    this.zoom = zoom;
    this.discord = discord;
  }
}
