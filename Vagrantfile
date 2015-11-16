Vagrant.configure(2) do |config|

  Vagrant.require_version ">= 1.7.4"

  config.vm.box = "chcokr/chcokr-webapp-starter"
  config.vm.box_version = "0.0.2"

  config.vm.synced_folder ".", "/app"

  config.vm.network :forwarded_port,

    # Ports have to be identical, in order for hot-loading to work.
    # It also has to match with the port defined in webpack.config.js.
    guest: 23971, host: 23971

  config.vm.provision "shell", inline: <<-SHELL
    sudo rm -rf /app/node_modules
    mkdir /app/node_modules
    sudo cp -r /chcokr-node-modules/* /app/node_modules/
    cd /app
    sudo npm install
  SHELL

end
