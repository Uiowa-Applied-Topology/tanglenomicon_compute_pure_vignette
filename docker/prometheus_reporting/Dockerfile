FROM python:3.12-slim-bullseye

# Set environment variables
ENV PYTHONDONTWRITEBYTECODE=1
ENV PYTHONUNBUFFERED=1

# If ran locally, comment this line out
RUN pip install faktory_prometheus_exporter

ENV FAKTORY_URL="tcp://faktory:7419"
ENV DAEMONIZE_EXPORTER=1

EXPOSE     7423
ENTRYPOINT [ "faktory-prometheus-exporter" ]