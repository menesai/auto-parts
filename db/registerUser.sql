INSERT INTO auto_partz_user (username, hash)
VALUES 
($1, $2)
returning *;