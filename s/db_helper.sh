# Bash needed for <<< #!/usr/bin/env bash 

if test "$1" = "drop"
then
  file_path=`realpath s/db_SQL/drop_tables.sql`
elif test "$1" = "init-1"
then
  file_path=`realpath s/db_SQL/init-01_main.sql`
elif test "$1" = "init-2"
then
  file_path=`realpath s/db_SQL/init-02_main_1-1.sql`
elif test "$1" = "init-3"
then
  file_path=`realpath s/db_SQL/init-03_ranks_joins.sql`
elif test "$1" = "init-4"
then
  file_path=`realpath s/db_SQL/init-04_details_joins.sql`
elif test "$1" = "init-5"
then
  file_path=`realpath s/db_SQL/init-05_histories_joins.sql`
elif test "$1" = "seed"
then
  file_path=`realpath s/db_SQL/seed-01.sql`
elif test "$1" = "start"
then
  file_path="NA"
fi

if test -z ${file_path+x} 
then
  echo "Please enter a valid db option. Available options:

  option        summary
--------------------------------------------------------
  init-1:       create main tables if not made
  init-2:       create 1-1 relations
  init-3:       create ranks and join tables
  drop:         drop all tables (delete tables)
  start:        connect to psql" 
else   
  POSTGRES_USER=$(grep POSTGRES_USER .env | xargs)
  IFS='=' read -ra POSTGRES_USER <<< "$POSTGRES_USER"
  POSTGRES_USER=${POSTGRES_USER[1]}

  POSTGRES_PASSWORD=$(grep POSTGRES_PASSWORD .env | xargs)
  IFS='=' read -ra POSTGRES_PASSWORD <<< "$POSTGRES_PASSWORD"
  POSTGRES_PASSWORD=${POSTGRES_PASSWORD[1]}

  if test "$file_path" = "NA"
  then
    psql postgresql://$POSTGRES_USER:$POSTGRES_PASSWORD@localhost:5432/postgres
  else
    psql postgresql://$POSTGRES_USER:$POSTGRES_PASSWORD@localhost:5432/postgres -f $file_path
  fi
fi