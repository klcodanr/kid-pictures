#!/bin/sh
cd /opt/dev/sarah-pictures
echo "Updating Sarah Photos Site"
/opt/mvn/apache-maven-3.0.4/bin/mvn clean install
