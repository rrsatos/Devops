```
ssh-keygen -t ed25519 -C "rrsantos@eafit.edu.co"
cat ~/.ssh/config
touch ~/.ssh/config
cat > ~/.ssh/config
Host *
  AddKeysToAgent yes
  IdentityFile ~/.ssh/id_ed25519
Press Ctrl+D
eval "$(ssh-agent)"
ssh-add ~/.ssh/id_ed25519
cat ~/.ssh/id_ed25519.pub