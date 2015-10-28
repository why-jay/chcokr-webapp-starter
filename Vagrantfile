Vagrant.configure(2) do |config|

  config.vm.box = "ubuntu/trusty64"

  config.vm.synced_folder ".", "/app"

  config.vm.provider "virtualbox" do |vb|
    vb.memory = "2048" # npm install seems to require a bit of RAM.
  end

  config.vm.network :forwarded_port,

    # Ports have to be identical, in order for hot-loading to work.
    # It also has to match with the port defined in webpack.config.js.
    guest: 23971, host: 23971

  config.vm.provision "shell", inline: <<-SHELL
    sudo apt-get update
    sudo apt-get install -y g++
    curl -sL https://deb.nodesource.com/setup_0.12 | sudo bash -
    sudo apt-get install -y nodejs
    sudo npm install -g npm@3
    cd /app
    npm install
    find ./node_modules/ -exec touch {} \; # npm start breaks without this :(
  SHELL

end
